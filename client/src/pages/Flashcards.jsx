import { useState } from 'react'
import './Flashcards.css'
import { Link } from 'react-router-dom'
import flashcards from '../data/flashcards'

function shuffleArray(array) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export default function Flashcards() {
  const [isShuffled, setIsShuffled] = useState(false)
  const [questionSet, setQuestionSet] = useState(flashcards)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)

  const currentCard = questionSet[currentIndex]

  const handleOptionClick = (option) => {
    if (showAnswer) return
    setSelectedOption(option)
    setShowAnswer(true)
    if (option === currentCard.answer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    setSelectedOption(null)
    setShowAnswer(false)
    setCurrentIndex((prev) => (prev + 1) % questionSet.length)
  }

  const handleShuffle = () => {
    const shuffled = shuffleArray(flashcards)
    setQuestionSet(shuffled)
    setIsShuffled(true)
    setCurrentIndex(0)
    setSelectedOption(null)
    setShowAnswer(false)
    setScore(0)
  }

  const handleReset = () => {
    setQuestionSet(flashcards)
    setIsShuffled(false)
    setCurrentIndex(0)
    setSelectedOption(null)
    setShowAnswer(false)
    setScore(0)
  }

  return (
    <div className="quiz-container">
      <Link to="/flashcards" className="back-link">← Back to Mode Select</Link>
      <h2>Quiz Mode {isShuffled && "(Shuffled)"}</h2>
      <p className="progress">Question {currentIndex + 1} of {questionSet.length}</p>
      <p className="score">Score: {score}</p>

      <div className="quiz-card">
        <p className="question">{currentCard.question}</p>
        <ul className="options">
          {currentCard.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={
                selectedOption
                  ? option === currentCard.answer
                    ? 'correct'
                    : option === selectedOption
                    ? 'incorrect'
                    : ''
                  : ''
              }
            >
              {option}
            </li>
          ))}
        </ul>
      </div>

      <div className="button-row">
        <button onClick={handleNext} className="next-btn">
          {currentIndex === questionSet.length - 1 ? "Restart" : "Next"}
        </button>
        {!isShuffled ? (
          <button onClick={handleShuffle} className="next-btn">Shuffle</button>
        ) : (
          <button onClick={handleReset} className="next-btn">Reset Order</button>
        )}
      </div>
    </div>
  )
}
