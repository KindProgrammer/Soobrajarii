import './AddPlayerModal.scss';
import Cross from './assets/cross.svg?react';

const AddPlayerModal = () => {
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

    return (
        <div className='modal-container'>
            <div className='modal'>
                <span className='cross-container'>
                    <Cross className='cross' onClick={() => { console.log('cross') }} />
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