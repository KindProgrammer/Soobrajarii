import './App.scss'

import PlayersBox from './PlayersBox'
import LetterBox from './LettersBox'
import QuestionBox from './QuestionBox'
import ModalProvider from './ModalProvider'
import PlayersProvider from './PlayerProvider'

function App() {

  return (
    <PlayersProvider>
      <ModalProvider>
        <div className='cards-container'>
          <LetterBox />
          <QuestionBox />
          <PlayersBox />
        </div>
      </ModalProvider>
    </PlayersProvider>
  )
}

export default App
