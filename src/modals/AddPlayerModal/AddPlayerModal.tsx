import './style.scss';
import { usePlayers } from '../../PlayerProvider';
import { useModal } from '../../ModalProvider';

const AddPlayerModal = () => {
const { addPlayer } = usePlayers();
const { closeModal } = useModal();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: { value: string };
          };
        
        if (target.name.value === '') return;
        
        const name = target.name.value;
        target.name.value = '';

        addPlayer(name);
        closeModal()
    }

    return (
        <div>
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
    );
}

export default AddPlayerModal;
