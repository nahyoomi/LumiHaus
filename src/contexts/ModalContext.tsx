import { createContext, useContext, useState, ReactNode } from "react";
import { Icons } from "../assets";

interface ModalContent {
  title: string;
  body: ReactNode;
}

interface ModalContextProps {
  openModal: (content: ModalContent) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (content: ModalContent) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6 z-10">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{modalContent.title}</h2>
              <button
                onClick={closeModal}
                aria-label="Close Modal"
                className="text-gray-500 hover:text-gray-700"
              >
                <img src={Icons.Close.src} alt={Icons.Close.alt} className="w-7 h-7" />
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