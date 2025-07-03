import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

interface ModalContextType {
    modal: {
      isOpen: boolean;
    };
    openModal: () => void;
    closeModal: () => void;
  }
  
const ModalContext = createContext<ModalContextType | null>(null);
  
interface ModalProviderProps {
    children: ReactNode;
  }
  
const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [modal, setModal] = useState<{
      isOpen: boolean;
    }>({
      isOpen: false,
    });
  
    const openModal = () => {
      setModal({
        isOpen: true,
      });
    };
  
    const closeModal = () => {
      setModal({
        isOpen: false,
      });
    };
  
    return (
      <ModalContext.Provider value={{ modal, openModal, closeModal }}>
        {children}
      </ModalContext.Provider>
    );
  };
  
  export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (context === null) {
      throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export default ModalProvider;