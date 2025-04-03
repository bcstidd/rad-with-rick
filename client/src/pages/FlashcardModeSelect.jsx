import { useNavigate } from 'react-router-dom'
import './Flashcards.css'

export default function FlashcardModeSelect() {
  const navigate = useNavigate()

  return (
    <div className="quiz-container">
      <h2>Select Study Mode</h2>
      <button onClick={() => navigate('/flashcards/quiz')} className="next-btn">
        Quiz Mode 🧠
      </button>
      <button
        onClick={() => navigate('/flashcards/study')}
        className="next-btn"
        style={{ marginLeft: '1rem' }}
      >
        Flashcard Mode 📇
      </button>
    </div>
  )
}