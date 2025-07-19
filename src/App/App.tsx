import './App.scss'

import PlayersBox from '../PlayersBox/PlayersBox'
import LetterBox from '../LettersBox/LettersBox'
import QuestionBox from '../QuestionBox/QuestionBox'
import ModalProvider from '../ModalProvider'

function App() {

  return (
      <ModalProvider>
        <div className='cards-container'>
          <LetterBox />
          <QuestionBox />
          <PlayersBox />
        </div>
      </ModalProvider>
  )
}

export default App
