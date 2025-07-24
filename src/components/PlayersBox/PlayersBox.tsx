import './PlayersBox.scss';
import { useSelector } from 'react-redux';
// import type { RootState } from '../../store/store';
import PlayerCard from '../PlayerCard/PlayerCard';
import { openModal } from '../../store/slices/modalSlice';
import { useDispatch } from 'react-redux';
import { playersSelector } from '../../store/slices/playersSlice';
import { memo } from 'react';

const PlayersBox = memo(() => {
    const players = useSelector(playersSelector)
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(openModal('addPlayerModal'));
    }

    return (
        <div className={`players-box`}>
            <div className="title">
                Игроки
            </div>
            <div className="players">
                { 
                    players.length === 0 ? 
                    <p className='empty-player-list'>Нет активных игроков</p> 
                    :
                    players?.map(player => <PlayerCard key={player.id} name={player.name} id={player.id} />)
                }
            </div>
            <div className="btn-container">
                <button className="btn" onClick={handleClick}>Добавить игрока</button>
            </div>
        </div>
    )
})

export default PlayersBox;

