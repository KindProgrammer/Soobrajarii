import './QuestionBox.scss';
import { questionSelector, generateQuestion } from '../../store/slices/questionSlice';
import { resetLetter } from '../../store/slices/letterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const QuestionBox = () => {
    const question = useSelector(questionSelector);
    const dispatch = useDispatch();

    const changeText = () => {
        dispatch(generateQuestion())
        dispatch(resetLetter())
    };

    return (
        <div className='card' onClick={changeText}>
            <p className='title'>Вопрос</p>
            <AnimatePresence mode='wait'>
                <motion.p 
                    className={`question animated-text`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                        duration: 0.3,
                        ease: 'easeOut'
                    }}
                    key={question}
                >
                    {question}
                </motion.p>
            </AnimatePresence>
        </div>
    )
}

export default QuestionBox;