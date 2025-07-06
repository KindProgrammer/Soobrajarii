import './PlayerCard.scss'
import { useState, useEffect } from "react";
import { usePlayers } from "./PlayerProvider";
import Cross from './assets/cross.svg?react';
import { delay } from './utils';

export type PlayerCardProps = {
    name: string;
    id: symbol
  };

const PlayerCard = ({ id, name }: PlayerCardProps) => {
    const [count, setCount] = useState(0)
    const [mounted, setMounted] = useState(false);
    const { removePlayer } = usePlayers()

    useEffect(() => {
        setMounted(true);
      }, []);


    const handleClick = () => {
        setCount(count + 1);
    }

    const handleRemove = async () => {
        setMounted(false)
        await delay(500)
        removePlayer(id)
    }

    return (
        <div className={`player ${mounted ? 'mounted' : ''}`}>
            <span className='cross-container'>
                <Cross className='cross' onClick={handleRemove} />
            </span>
            <div className="player-name">{name}</div>
            <button className="count" onClick={handleClick}>{count}</button>
        </div>
    );
}

export default PlayerCard;