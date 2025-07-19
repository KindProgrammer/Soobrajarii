import './App.scss'

import PlayersBox from '../PlayersBox/PlayersBox'
import LetterBox from '../LettersBox/LettersBox'
import QuestionBox from '../QuestionBox/QuestionBox'
import ModalProvider from '../ModalProvider'
import PlayersProvider from '../PlayerProvider'

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
