import { useState } from "react";
import { usePlayers } from "./PlayerProvider";
import Cross from './assets/cross.svg?react';

export type PlayerCardProps = {
    name: string;
    id: symbol
  };

const PlayerCard = ({ id, name }: PlayerCardProps) => {
    const [count, setCount] = useState(0)
    const { removePlayer } = usePlayers()

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleRemove = () => {
        removePlayer(id)
    }

    return (
        <div className="player">
            <span className='cross-container'>
                <Cross className='cross' onClick={handleRemove} />
            </span>
            <div className="player-name">{name}</div>
            <button className="count" onClick={handleClick}>{count}</button>
        </div>
    );
}

export default PlayerCard;