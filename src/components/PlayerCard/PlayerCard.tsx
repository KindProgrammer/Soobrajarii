import './PlayerCard.scss'
import { useState } from "react";
import Cross from '../assets/cross.svg?react';
import { removePlayer, incrementCount, decrementCount, selectPlayerById } from '../../store/slices/playersSlice';
import { victoryPointsSelector } from '../../store/slices/settingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { openModal } from '../../store/slices/modalSlice';
import { memo } from 'react';
import { setWinner } from '../../store/slices/winnerSlice';

export type PlayerCardProps = {
    name: string;
    id: string;
  };

const PlayerCard = memo(({ id, name }: PlayerCardProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const dispatch = useDispatch();
    const player = useSelector(selectPlayerById(id));
    const victoryPoints = useSelector(victoryPointsSelector);

    if (player?.count === victoryPoints) {
        dispatch(setWinner(name))
        dispatch(openModal({type: 'congratulationsWinnerModal', cross: false}))
    }

    const handlePlus = () => {
        dispatch(incrementCount(id));
    }

    const handleMinus = () => {
        dispatch(decrementCount(id));
    }

    const handleRemove = async () => {
        setIsVisible(false);
        setTimeout(() => dispatch(removePlayer(id)), 500);
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
                            <div className="count">{player?.count}</div>
                            <button className='count-btn' onClick={handlePlus}>{"\uFF0B"}</button>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
})

export default PlayerCard;