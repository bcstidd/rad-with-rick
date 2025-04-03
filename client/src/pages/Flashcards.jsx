import './Flashcards.css';
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
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const currentCard = questionSet[currentIndex]

  const handleOptionClick = (option) => {
    if (showAnswer) return
    setSelectedOption(option)
    setShowAnswer(true)
    setShowExplanation(false)
    if (option === currentCard.answer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    setSelectedOption(null)
    setShowAnswer(false)
    setShowExplanation(false)
    setCurrentIndex((prev) => Math.min(prev + 1, questionSet.length - 1))
  }

  const handlePrevious = () => {
    setSelectedOption(null)
    setShowAnswer(false)
    setShowExplanation(false)
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleShuffle = () => {
    const shuffled = shuffleArray(flashcards)
    setQuestionSet(shuffled)
    setIsShuffled(true)
    setCurrentIndex(0)
    setSelectedOption(null)
    setShowAnswer(false)
    setShowExplanation(false)
    setScore(0)
  }

  const handleReset = () => {
    setQuestionSet(flashcards)
    setIsShuffled(false)
    setCurrentIndex(0)
    setSelectedOption(null)
    setShowAnswer(false)
    setShowExplanation(false)
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

        {showAnswer && (
          <img
            src="/icons/ytho.jpg"
            alt="Why is this correct/incorrect?"
            className="ytho"
            onClick={() => setShowExplanation(!showExplanation)}
          />
        )}

        {showAnswer && showExplanation && (
          <p className="explanation">{currentCard.explanation}</p>
        )}
      </div>

      <div className="nav-buttons">
        <button onClick={handlePrevious} className="prev-btn" disabled={currentIndex === 0}>
          Previous
        </button>

        <button onClick={handleNext} className="next-btn" disabled={currentIndex === questionSet.length - 1}>
          Next
        </button>
      </div>

      <div className="button-row">
        {!isShuffled ? (
          <button onClick={handleShuffle} className="next-btn">Shuffle</button>
        ) : (
          <button onClick={handleReset} className="next-btn">Reset Order</button>
        )}
      </div>
    </div>
  )
}
