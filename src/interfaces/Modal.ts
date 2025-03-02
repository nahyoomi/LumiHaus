import { ReactNode } from "react";

export type Position = {
  top: number;
  left: number;
  width?: number;
  height?: number;
};

export interface ModalContent {
  title: string;
  body: ReactNode;
}

export interface ModalContextProps {
  openModal: (
    content: ModalContent,
    targetElement?: HTMLElement | null
  ) => void;
  closeModal: () => void;
}
