import './CongratulationsWinnerModal.scss';
import Cup from '../../assets/cup.svg?react';
import ModalLayout from "../ModalLayout/ModalLayout";
import { winnerSelector, resetWinner } from "../../../store/slices/winnerSlice";
import { resetGame } from "../../../store/slices/playersSlice";
import { closeModal } from "../../../store/slices/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import Firework from '../../Firework/Firework';


const CongratulationsWinnerModal = () => {
    const winner = useSelector(winnerSelector);
    const dispatch = useDispatch();

    const handleNewGame = () => {
        dispatch(resetWinner());
        dispatch(resetGame());
        dispatch(closeModal());
    }

    return (
        <ModalLayout>
            <Firework />
            <div className="congratulations-container">
                <div className='cup'>
                    <Cup className='cup-icon'/>
                </div>
                <div><strong>{winner}</strong>, мои поздравления!</div>
                <div className='btn-container'>
                    <button className='btn' onClick={handleNewGame}>Новая игра</button>
                </div>
            </div>
            {/* <Firework /> */}
        </ModalLayout>
    );
}

export default CongratulationsWinnerModal;