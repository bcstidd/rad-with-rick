import { useState } from 'react'
import './Flashcards.css'

const sampleCards = [
  {
    question: "What does ALARA stand for?",
    answer: "As Low As Reasonably Achievable"
  },
  {
    question: "What is the purpose of a bitewing radiograph?",
    answer: "To detect interproximal decay and bone levels."
  },
  {
    question: "Which tissue is most sensitive to radiation?",
    answer: "Reproductive tissue"
  }
]

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const currentCard = sampleCards[currentIndex]

  const handleNext = () => {
    setFlipped(false)
    setCurrentIndex((prev) => (prev + 1) % sampleCards.length)
  }

  return (
    <div className="quiz-container">
      <h2>Flashcards Quiz</h2>

      <div
        className={`quiz-card ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
      >
        {flipped ? currentCard.answer : currentCard.question}
      </div>

      <button onClick={handleNext} className="next-btn">
        Next
      </button>
    </div>
  )
}
