import './PlayersBox.scss';
import { useModal } from './ModalProvider';
import { usePlayers } from './PlayerProvider';
import AddPlayerModal from './modals/AddPlayerModal/AddPlayerModal';

const PlayersBox = () => {
    const { openModal } = useModal();
    const { players } = usePlayers();
    let content;

    if (players.length === 0) {
        content = <p className='empty-player-list'>Нет активных игроков</p>
    } else {
        content = players.map((player) => {
            return player?.card;
        })
    }
    
    const handleClick = () => {
        openModal(<AddPlayerModal />);
    }

    return (
        <div className={`players-box`}>
            <div className="title">
                Игроки
            </div>
            <div className="players">
                { content }
            </div>
            <div className="btn-container">
                <button className="btn" onClick={handleClick}>Добавить игрока</button>
            </div>
        </div>
    )
}

export default PlayersBox;

