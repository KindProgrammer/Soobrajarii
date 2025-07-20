import './PlayerCard.scss'
import { useState } from "react";
import Cross from '../assets/cross.svg?react';
import { removePlayer } from '../../store/slices/playersSlice';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

export type PlayerCardProps = {
    name: string;
    id: string;
  };

const PlayerCard = ({ id, name }: PlayerCardProps) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const dispatch = useDispatch();

    const handlePlus = () => {
        setCount(count + 1);
    }

    const handleMinus = () => {
        if (count - 1 < 0) return;
        setCount(count - 1);
    }

    const handleRemove = async () => {
        setIsVisible(false);
        setTimeout(() => dispatch(removePlayer(name)), 500); 
    }

    return (
        <AnimatePresence mode='wait'>
            {
                isVisible && (
                    <motion.div
                        key={id} 
                        className={`player`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                    >
                        <span className='cross-container'>
                            <Cross className='cross' onClick={handleRemove} />
                        </span>
                        <p className="player-name" title={name}>{name}</p>
                        <div className='count-container'>
                            <button className='count-btn' onClick={handleMinus}>{"\u2212"}</button>
                            <div className="count">{count}</div>
                            <button className='count-btn' onClick={handlePlus}>{"\uFF0B"}</button>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
}

export default PlayerCard;