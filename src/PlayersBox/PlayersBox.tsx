import './PlayersBox.scss';
import { useModal } from '../ModalProvider';
import AddPlayerModal from '../modals/AddPlayerModal/AddPlayerModal';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import PlayerCard from '../PlayerCard/PlayerCard';

const PlayersBox = () => {
    const { openModal } = useModal();
    const players = useSelector((state: RootState) => state.players)
    
    const handleClick = () => {
        openModal(<AddPlayerModal />);
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

