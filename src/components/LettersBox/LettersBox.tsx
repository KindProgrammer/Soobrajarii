import './LetterBox.scss';
import { letterSelector, generateLetter } from '../../store/slices/letterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const LetterBox = () => {
    const letter = useSelector(letterSelector);
    const dispatch = useDispatch();

    const changeText = () => {
            dispatch(generateLetter())
    };

    return (
        <div 
            className='card' 
            onClick={changeText}
        >
            <p className='title'>Буква</p>
            <AnimatePresence mode='wait'>
                <motion.p 
                    className={`letter animated-text`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                        duration: 0.3,
                        ease: 'easeOut'
                    }}
                    key={letter}
                >
                    {letter}
                </motion.p>
            </AnimatePresence>
        </div>
    )
}

export default LetterBox;