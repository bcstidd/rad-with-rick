import { useNavigate } from 'react-router-dom'
import './Flashcards.css'

export default function FlashcardModeSelect() {
  const navigate = useNavigate()

  return (
    <div className="quiz-container">
  <h2 className='mode-text'>Select Study Mode</h2>
  <div className="quiz-type-buttons">
    <button onClick={() => navigate('/flashcards/quiz')}>
      Quiz Mode 
    </button>
    <button onClick={() => navigate('/flashcards/study')}>
      Flashcard Mode 
    </button>
  </div>
</div>
  )
}

