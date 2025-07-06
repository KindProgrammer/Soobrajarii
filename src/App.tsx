import './App.scss'

import PlaersBox from './PlayersBox'
import LetterBox from './LettersBox'
import QuestionBox from './QuestionBox'
import AddPlayerModal from './AddPlayerModal'
import ModalProvider from './ModalProvider'
import PlayersProvider from './PlayerProvider'

function App() {

  return (
    <PlayersProvider>
      <ModalProvider>
        <div className='cards-container'>
          <LetterBox />
          <QuestionBox />
          <PlaersBox />
          <AddPlayerModal />
        </div>
      </ModalProvider>
    </PlayersProvider>
  )
}

export default App
