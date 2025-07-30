import './Controls.scss';
import Info from '../assets/info.svg?react';
import Settings from '../assets/settings.svg?react';
import { openModal } from '../../store/slices/modalSlice';
import { useDispatch } from 'react-redux';

const Controls = () => {
    const dispatch = useDispatch();

    const handleOpenSettings = () => {
        dispatch(openModal({type: 'settingsModal', cross: true}))
    }

    const handleOpenInfo = () => {
        
    }

    return (
        <div className='controls'>
            <button className='controls-item settings' onClick={handleOpenSettings}>
                <Settings className='icon'/>
            </button>
            <button className='controls-item info' onClick={handleOpenInfo}>
                <Info className='icon'/>
            </button>
        </div>
    );
}

export default Controls;