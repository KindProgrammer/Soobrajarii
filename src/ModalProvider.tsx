import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import Modal from './modals/Modal/Modal';

interface ModalContextType {
    isOpend: boolean;
    modalContent: ReactNode | null;
    openModal: (modalContent: ReactNode) => void;
    closeModal: () => void;
  }
  
const ModalContext = createContext<ModalContextType | null>(null);
  
interface ModalProviderProps {
    children: ReactNode;
  }
  
const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);
    const [isOpend, setIsOpend] = useState<boolean>(false);

    const openModal = (modalContent: ReactNode) => {
      setModalContent(modalContent);
      setIsOpend(true);
    };
  
    const closeModal = () => {
      setIsOpend(false);
      setModalContent(null);
    };
  
    return (
      <ModalContext.Provider value={{ isOpend, modalContent, openModal, closeModal }}>
        {children}
        <Modal />
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