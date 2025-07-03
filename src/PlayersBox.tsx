import './PlayersBox.scss';
import React from 'react';
import { useState } from 'react';
// import PlayerCard from './PlayerCard';
import { useModal } from './ModalProvider';

const PlaersBox = () => {
    const { openModal } = useModal();
    const [playersList, _setPlayrsList] = useState<Array<React.ReactNode>>([]);
    const content = playersList.length === 0 ? <p className='empty-player-list'>Нет активных игроков</p> : playersList;
    
    const handleClick = () => {
        // setPlayrsList([...playersList, <PlayerCard name='ddd' />])
        openModal();
    }

    return (
        <div className='plaers-box'>
            <div className="title">
                Игроки
            </div>
            <div className="playrs">
                { content }
            </div>
            <div className="btn-container">
                <button className="btn" onClick={handleClick}>Добавить игрока</button>
            </div>
        </div>
    )
}

export default PlaersBox;

