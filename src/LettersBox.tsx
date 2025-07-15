import { getRandomLetter } from "./utils";
import { useState } from 'react';

const LetterBox = () => {
    const [letter, setLetter] = useState('?')
    const [isVisible, setIsVisible] = useState(true);

    const changeText = () => {
        // Запускаем исчезновение
        setIsVisible(false);
        
        // Через 500 мс меняем текст и запускаем появление
        setTimeout(() => {
        setLetter(getRandomLetter(letter))
          setIsVisible(true);
        }, 500);
    };

    return (
        <div className='card' onClick={changeText}>
            <p className='title'>Буква</p>
            <p className={`letter animated-text ${isVisible ? 'fade-in' : 'fade-out'}`}>
                {letter}
            </p>
        </div>
    )
}

export default LetterBox;