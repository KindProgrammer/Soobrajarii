import './PlayersBox.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import PlayerCard from '../PlayerCard/PlayerCard';
import { openModal } from '../store/slices/modalSlice';
import { useDispatch } from 'react-redux';

const PlayersBox = () => {
    const players = useSelector((state: RootState) => state.players)
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
                    players.players?.length === 0 ? 
                    <p className='empty-player-list'>Нет активных игроков</p> 
                    :
                    players.players?.map(player => <PlayerCard key={player.name} name={player.name} id={player.name} />)
                }
            </div>
            <div className="btn-container">
                <button className="btn" onClick={handleClick}>Добавить игрока</button>
            </div>
        </div>
    )
}

export default PlayersBox;

