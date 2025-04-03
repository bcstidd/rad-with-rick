import { useState } from 'react'
import './Flashcards.css'

// Reuse the same quiz data
const flashcards = [
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
  },
  {
    question: "What is the recommended minimum distance a healthcare worker should stand from the x-ray tube head during exposure?",
    answer: "6 feet"
  },
  {
    question: "Which radiograph is best for evaluating third molars?",
    answer: "Panoramic"
  },
  {
    question: "What does the milliamperage (mA) setting on an x-ray machine control?",
    answer: "Quantity of x-rays"
  },
  {
    question: "Which landmark appears radiolucent on a periapical radiograph of the maxillary central incisors?",
    answer: "Incisive foramen"
  },
  {
    question: "What error causes overlapping of the proximal surfaces on a bitewing radiograph?",
    answer: "Incorrect horizontal angulation"
  },
  {
    question: "What is the effect of increasing the kilovoltage peak (kVp) setting?",
    answer: "Increased penetration and lower contrast"
  },
  {
    question: "Which type of cells are most sensitive to radiation?",
    answer: "Rapidly dividing cells"
  }
]

export default function FlashcardFlip() {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const handleNext = () => {
    setFlipped(false)
    setIndex((prev) => (prev + 1) % flashcards.length)
  }

  return (
    <div className="quiz-container">
      <h2>Flashcard Mode</h2>
      <p className="progress">Card {index + 1} of {flashcards.length}</p>
      <div
        className={`quiz-card ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
      >
        {flipped ? flashcards[index].answer : flashcards[index].question}
      </div>
      <button onClick={handleNext} className="next-btn">Next</button>
    </div>
  )
}
