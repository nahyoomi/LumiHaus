import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  useEffect,
} from "react";
import { Icons } from "../assets";
import { Position, ModalContextProps, ModalContent } from "../interfaces/Modal";

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const [position, setPosition] = useState<Position | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const positionAdjustedRef = useRef(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculatePosition = (element: HTMLElement): Position => {
    const rect = element.getBoundingClientRect();
    const modalWidth = isMobile ? window.innerWidth * 0.8 : 400;
    return isMobile
      ? {
          top: rect.top + rect.height + 10 + window.scrollY,
          left:
            Math.max(10, (window.innerWidth - modalWidth) / 2) + window.scrollX,
          width: rect.width,
          height: rect.height,
        }
      : {
          top: rect.top + 70 + window.scrollY,
          left:
            Math.max(10, rect.left + rect.width - modalWidth) + window.scrollX,
          width: rect.width,
          height: rect.height,
        };
  };

  useEffect(() => {
    if (
      modalContent &&
      position &&
      modalRef.current &&
      !positionAdjustedRef.current
    ) {
      adjustPosition();
    }
  }, [modalContent, position, isMobile]);

  const adjustPosition = (): void => {
    const modalRect = modalRef.current!.getBoundingClientRect();
    const {
      scrollX,
      scrollY,
      innerWidth: viewportWidth,
      innerHeight: viewportHeight,
    } = window;
    let { top, left } = position!;

    const newLeft = Math.min(
      Math.max(left, scrollX + 10),
      viewportWidth + scrollX - modalRect.width - 10
    );
    const newTop = Math.min(
      Math.max(top, scrollY + 10),
      viewportHeight + scrollY - modalRect.height - 10
    );

    if (newLeft !== left || newTop !== top) {
      setPosition((prev) =>
        prev ? { ...prev, left: newLeft, top: newTop } : null
      );
    }
    positionAdjustedRef.current = true;
  };

  useEffect(() => {
    const handleScroll = () => modalContent && closeModal();
    const handleClickOutside = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        modalContent
      ) {
        closeModal();
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalContent]);

  const openModal = (
    content: ModalContent,
    targetElement: HTMLElement | null = null
  ) => {
    positionAdjustedRef.current = false;
    setModalContent(content);
    setPosition(targetElement ? calculatePosition(targetElement) : null);
  };

  const closeModal = () => {
    setModalContent(null);
    setPosition(null);
  };

  const getModalWidth = () => (isMobile ? "80vw" : "400px");

  const modalStyle = position
    ? {
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: getModalWidth(),
        minWidth: isMobile ? "auto" : "400px",
      }
    : { width: isMobile ? "80%" : "100%", maxWidth: "500px" };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && (
        <div
          className={`fixed inset-0 z-50 ${
            position ? "" : "flex items-center justify-center"
          }`}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="absolute inset-0 bg-black/5" aria-hidden="true" />
          <div
            ref={modalRef}
            className={`bg-white rounded-lg shadow-lg p-6 z-10 ${
              position ? "absolute" : "relative"
            }`}
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{modalContent.title}</h2>
              <button
                onClick={closeModal}
                aria-label="Close Modal"
                className="text-gray-500 hover:text-gray-700"
              >
                <img
                  src={Icons.Close.src}
                  alt={Icons.Close.alt}
                  className="w-7 h-7"
                />
              </button>
            </div>
            <hr className="my-4" />
            {modalContent.body}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
