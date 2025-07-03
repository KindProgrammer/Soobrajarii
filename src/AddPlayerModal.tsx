import './AddPlayerModal.scss';
import React from 'react';
import Cross from './assets/cross.svg?react';
import { useModal } from './ModalProvider';
import { useState, useEffect } from 'react';


const AddPlayerModal = () => {
    const { modal, closeModal } = useModal();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (modal.isOpen) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [modal.isOpen])

    if (!modal.isOpen) {
        return null;
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: { value: string };
          };
        
        if (target.name.value === '') return;
        
        const name = target.name.value;
        target.name.value = '';
        console.log(name);
    }

    const handleClose = async () => {
        async function delay(ms: number): Promise<void> {
            return new Promise((resolve) => {
              setTimeout(resolve, ms);
            });
          }
        
        setIsVisible(false);
        await delay(500);
        closeModal()
    }

    return (
        <div className={`modal-container ${isVisible ? 'fade-in' : 'fade-out'}`}>  
            <div className='modal'>
                <span className='cross-container'>
                    <Cross className='cross' onClick={handleClose} />
                </span>
                <p className='clue-text'>Напишите имя нового игрока:</p>
                <form className='form' onSubmit={handleSubmit}>
                    <input 
                        className='input'
                        type="text"
                        name="name"
                        placeholder='Имя игрока'
                        minLength={3}
                        maxLength={20}
                    />
                    <button className='btn' type="submit">Добавить</button>
                </form>
            </div>
        </div>
    )
}

export default AddPlayerModal;