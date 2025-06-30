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
        setLetter(getRandomLetter())
          setIsVisible(true);
        }, 500);
    };

    // const handleClick = () => {
    //     setLetter(getRandomLetter())
    // }

    return (
        <div className='card'>
            <p className='title'>Буква</p>
            <p className={`letter animated-text ${isVisible ? 'fade-in' : 'fade-out'}`}>
                {letter}
            </p>
            <div className="gradiend-bg">
                <button className='btn' onClick={changeText}>Создать букву</button>
            </div>
        </div>
    )
}

export default LetterBox;