import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Flashcards.css'
import flashcards from '../data/flashcards'

export default function FlashcardFlip() {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const card = flashcards[index]

  const handleNext = () => {
    setFlipped(false)
    setIndex((prev) => (prev + 1) % flashcards.length)
  }

  return (
    <div className="quiz-container">
      <Link to="/flashcards" className="back-link">← Back to Mode Select</Link>
      <h2>Flashcard Mode</h2>
      <p className="progress">Card {index + 1} of {flashcards.length}</p>
      <div
        className={`quiz-card ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
      >
        {card.image && (
  <div className="flashcard-image-wrapper">
    <img src={card.image} alt="Flashcard visual" className="flashcard-image" />
  </div>
)}

        {flipped ? flashcards[index].answer : flashcards[index].question}
      </div>
      <button onClick={handleNext} className="next-btn">Next</button>
    </div>
  )
}
