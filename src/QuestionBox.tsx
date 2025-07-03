import { getRandomQuestion } from './utils';
import { useState } from 'react';

const QuestionBox = () => {
    const [question, setQuestion] = useState('...')
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
        <div className='card'>
            <p className='title'>Вопрос</p>
            <p className={`question animated-text ${isVisible ? 'fade-in' : 'fade-out'}`}>
                {question}
            </p>
            <div className="gradiend-bg">
                <button className='btn' onClick={changeText}>Создать вопрос</button>
            </div>
        </div>
    )
}

export default QuestionBox;