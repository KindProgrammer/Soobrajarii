import './App.scss'
import React from 'react'
import PlayersBox from '../PlayersBox/PlayersBox'
import LetterBox from '../LettersBox/LettersBox'
import QuestionBox from '../QuestionBox/QuestionBox'
import Controls from '../Controls/Controls'
import selectModal from '../modals/selectModal'
import { typeSelector } from '../../store/slices/modalSlice'
import { useSelector } from 'react-redux'
import type { ModalType } from '../modals/selectModal'

function App() {
  const modalType = useSelector(typeSelector) as ModalType | null;
  const Modal: (React.ComponentType) | null = modalType ? selectModal[modalType] : null;

  return (
      <>
        <Controls />
        <div className='cards-container'>
          <LetterBox />
          <QuestionBox />
          <PlayersBox />
        </div>
        {Modal ? <Modal /> : ''}
      </>
  )
}

export default App
