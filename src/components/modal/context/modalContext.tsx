"use client";

import { createContext, useContext, useState } from "react";

export type ModalType=string

interface ModalContextType {
  id?: string | null;
  type: ModalType | null;
  isOpen: boolean;
  openModal: (type: ModalType,id?: string | undefined,) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState<string | null>(null);
  const [type, setType] = useState<ModalType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (modalType: ModalType,modalId?: string,) => {
    setId(modalId as string);
    setType(modalType);
    setIsOpen(true);
  };

  const closeModal = () => {
    setId(null);
    setType(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        id,
        type,
        isOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used inside ModalProvider");
  }
  return context;
};
