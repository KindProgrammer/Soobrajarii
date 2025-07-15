import './QuestionBox.scss';
import { getRandomQuestion } from '../utils';
import { useState } from 'react';

const QuestionBox = () => {
    const [question, setQuestion] = useState<string>('')
    const [isVisible, setIsVisible] = useState(true);

    const changeText = () => {
        // Запускаем исчезновение
        setIsVisible(false);
        
        // Через 500 мс меняем текст и запускаем появление
        setTimeout(() => {
        setQuestion(getRandomQuestion(question))
          setIsVisible(true);
        }, 500);
    };

    return (
        <div className='card' onClick={changeText}>
            <p className='title'>Вопрос</p>
            <p className={`question animated-text ${isVisible ? 'fade-in' : 'fade-out'}`}>
                {question === '' ? <span className='first-time'>Создать вопрос</span> : question}
            </p>
        </div>
    )
}

export default QuestionBox;