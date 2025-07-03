import './App.scss'

import PlaersBox from './PlayersBox'
import LetterBox from './LettersBox'
import QuestionBox from './QuestionBox'
import AddPlayerModal from './AddPlayerModal'
import ModalProvider from './ModalProvider'

function App() {

  return (
    <ModalProvider>
      <div className='cardsContainer'>
        <LetterBox />
        <QuestionBox />
        <PlaersBox />
        <AddPlayerModal />
      </div>
    </ModalProvider>
  )
}

export default App
