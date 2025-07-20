import './style.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useSelector, shallowEqual } from 'react-redux';
import { addPlayer } from '../../../store/slices/playersSlice';
import type { RootState } from '../../../store/store';
import ModalLayout from '../ModalLayout/ModalLayout';
import { closeModal } from '../../../store/slices/modalSlice';

const AddPlayerModal = () => {
    const dispatch = useDispatch();
    
    // Оптимизированный селектор
    const currentPlayers = useSelector(
      (state: RootState) => state.players.players?.map(p => p?.name.toLowerCase()),
      shallowEqual
    );
  
    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .required('Обязательное поле')
        .min(3, 'Минимум 3 символа')
        .max(20, 'Максимум 20 символов')
        .test(
            'unique-name',
            'Игрок с таким именем уже существует',
            (value) => {
                const name = value.trim();
                return !currentPlayers?.includes(name);
            }
        )
    });
  
    const formik = useFormik({
      initialValues: { name: '' },
      validationSchema,
      onSubmit: (values) => {
        const name = values.name.trim();
        dispatch(addPlayer(name));
        dispatch(closeModal());
      }
    });

    return (
        <ModalLayout>
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
                {formik.touched.name && formik.errors.name ? 
                (<p className="error-message">{formik.errors.name}</p>) 
                : 
                null}
            </div>
        </ModalLayout>
    );
}

export default AddPlayerModal;
