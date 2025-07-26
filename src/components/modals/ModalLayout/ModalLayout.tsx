import './style.scss';
import Cross from '../../assets/cross.svg?react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { isOpenedSelector, crossSelector, closeModal } from '../../../store/slices/modalSlice';
import type { ReactNode } from 'react';

interface ModalProps {
    children: ReactNode
}

const ModalLayout = ({children}: ModalProps) => {
    const isOpend = useSelector(isOpenedSelector);
    const cross = useSelector(crossSelector);
    const dispatch = useDispatch();

    const handleClose = async () => {
        dispatch(closeModal());
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
                                {cross && <Cross  className='cross' onClick={handleClose} />}
                            </motion.span>
                            { children }
                        </motion.div>
                    </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ModalLayout;