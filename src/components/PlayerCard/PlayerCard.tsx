import './PlayerCard.scss'
import { useState, useEffect } from "react";
import Cross from '../assets/cross.svg?react';
import { delay } from '../../utils';
import { removePlayer } from '../../store/slices/playersSlice';
import { useDispatch } from 'react-redux';

export type PlayerCardProps = {
    name: string;
    id: string;
  };

const PlayerCard = ({ id, name }: PlayerCardProps) => {
    const [count, setCount] = useState(0)
    const [mounted, setMounted] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setMounted(true);
      }, []);

    const handlePlus = () => {
        setCount(count + 1);
    }

    const handleMinus = () => {
        if (count - 1 < 0) return;
        setCount(count - 1);
    }

    const handleRemove = async () => {
        setMounted(false)
        await delay(500)
        dispatch(removePlayer(name))
    }

    return (
        <div key={id} className={`player ${mounted ? 'mounted' : ''}`}>
            <span className='cross-container'>
                <Cross className='cross' onClick={handleRemove} />
            </span>
            <p className="player-name" title={name}>{name}</p>
            <div className='count-container'>
                <button className='count-btn' onClick={handleMinus}>{"\u2212"}</button>
                <div className="count">{count}</div>
                <button className='count-btn' onClick={handlePlus}>{"\uFF0B"}</button>
            </div>
        </div>
    );
}

export default PlayerCard;