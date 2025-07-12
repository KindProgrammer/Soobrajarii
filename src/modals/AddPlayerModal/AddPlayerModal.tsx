import './style.scss';
import { usePlayers } from '../../PlayerProvider';
import { useModal } from '../../ModalProvider';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddPlayerModal = () => {
const { players, addPlayer } = usePlayers();
const { closeModal } = useModal();
const currentPlayers = players.map(player => player.id);

const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Обязательное поле')
      .min(3, 'Минимум 3 символа')
      .max(20, 'Максимум 20 символов')
      .test(
        'unique-name',
        'Игрок с таким именем уже существует',
        (value) => {
            const newPlayer = value.trim();
            return !currentPlayers.includes(newPlayer);
        }
      )
    });

    const formik = useFormik({
        initialValues: {
        name: ''
        },
        validationSchema,
        onSubmit: (values) => {
            addPlayer(values.name.trim());
            closeModal();
        }
    });

    return (
        <div>
            <p className='clue-text'>Напишите имя нового игрока:</p>
            <form className='form' onSubmit={formik.handleSubmit}>
                <input 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`input ${formik.touched.name && formik.errors.name ? 'input-error' : ''}`}
                    type="text"
                    name="name"
                    placeholder='Имя игрока'
                    minLength={3}
                    maxLength={20}
                />
                <button 
                    disabled={!formik.isValid || formik.isSubmitting}
                    className='btn'
                    type="submit"
                >
                    Добавить
                </button>
            </form>
            {formik.touched.name && formik.errors.name && (
                <p className="error-message">{formik.errors.name}</p>
            ) || (<p className="error-message"></p>)}
        </div>
    );
}

export default AddPlayerModal;
