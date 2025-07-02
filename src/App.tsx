import './App.scss'

import PlaersBox from './PlayersBox'
import LetterBox from './LettersBox'
import QuestionBox from './QuestionBox'
import AddPlayerModal from './AddPlayerModal'

function App() {

  return (
    <div className='cardsContainer'>
      <LetterBox />
      <QuestionBox />
      <PlaersBox />
      <AddPlayerModal />
    </div>
  )
}

export default App
