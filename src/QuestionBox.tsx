import { getRandomQuestion } from './utils';
import { useState } from 'react';

const QuestionBox = () => {
    const [question, setQuestion] = useState('...')

    const handleClick = () => {
        setQuestion(getRandomQuestion())
    }

    return (
        <div className='card'>
            <p className='title'>Вопрос</p>
            <p className='question'>
                {question}
            </p>
            <div className="gradiend-bg">
                <button className='btn' onClick={handleClick}>Создать букву</button>
            </div>
        </div>
    )
}

export default QuestionBox;