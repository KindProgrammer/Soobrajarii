import './PlayersBox.scss';
import React from 'react';
import { useState } from 'react';
// import type { PlayerCardProps } from './PlayerCard';
import PlayerCard from './PlayerCard';

const PlaersBox = () => {
    const [playersList, setPlayrsList] = useState<Array<React.ReactNode>>([]);
    const content = playersList.length === 0 ? <p className='empty-player-list'>Нет активных игроков</p> : playersList;
    
    const handleClick = () => {
        setPlayrsList([...playersList, <PlayerCard name='ddd' />])
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

