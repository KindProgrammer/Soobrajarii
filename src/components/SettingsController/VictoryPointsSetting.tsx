import './VictoryPointsSetting.scss';
import RightArrow from "../assets/right-arrow.svg?react"
import LeftArrow from "../assets/left-arrow.svg?react"
import { setVictoryPoints, victoryPointsSelector } from '../../store/slices/settingsSlice';
import { useDispatch, useSelector } from 'react-redux';

const VictoryPointsSetting = () => {
    const dispatch = useDispatch();
    const victoryPoints = useSelector(victoryPointsSelector);

    const handlePlus = () => {
        dispatch(setVictoryPoints(victoryPoints + 1))
    }

    const handleMinus = () => {
        dispatch(setVictoryPoints(victoryPoints - 1))
    }

    return (
        <div className="setting">
            <div className="sett-label">Победные очки:</div>
            <div className="sett-field" id="long-break">
                <button className="sett-btn sett-btn-left" onClick={handleMinus}>
                    <LeftArrow className='sett-icon'/>
                </button>
                <input 
                    type="number" 
                    min="1" 
                    max="50" 
                    className="number" 
                    value={victoryPoints} 
                    onChange={(e) => {
                        const newValue = Number(e.target.value);
                        if (!isNaN(newValue)) {
                            dispatch(setVictoryPoints(newValue))
                        }
                    }}
                />
                <button className="sett-btn sett-btn-right" onClick={handlePlus}>
                    <RightArrow className='sett-icon'/>
                </button>
            </div>
        </div>
    );
}

export default VictoryPointsSetting;