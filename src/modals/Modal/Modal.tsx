import './style.scss';
import Cross from '../../assets/cross.svg?react';
import { useModal } from '../../ModalProvider';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = () => {
    const { isOpend, modalContent, closeModal } = useModal();

    const handleClose = async () => {
        closeModal();
    }

    return (
        <AnimatePresence>
            {
                isOpend && (
                    <motion.div 
                        className={`modal-container`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >  
                        <motion.div 
                            className='modal'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.span className='cross-container'>
                                <Cross className='cross' onClick={handleClose} />
                            </motion.span>
                            { modalContent }
                        </motion.div>
                    </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;