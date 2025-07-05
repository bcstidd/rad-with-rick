import { useState } from 'react'
import { Link } from 'react-router-dom'
import flashcards from '../data/flashcards'
import QuizCard from '../components/QuizCard'
import '../pages/Flashcards.css'

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
  const [hidden, setHidden] = useState(false)

  const currentCard = questionSet[currentIndex]

  const handleOptionClick = (option) => {
    if (showAnswer) return
    setSelectedOption(option)
    setShowAnswer(true)
    setShowExplanation(false)
    if (option === currentCard.answer) setScore(score + 1)
  }

  const handleNext = () => {
    setHidden(true)
    setTimeout(() => {
      setSelectedOption(null)
      setShowAnswer(false)
      setShowExplanation(false)
      setCurrentIndex((prev) => Math.min(prev + 1, questionSet.length - 1))
      setHidden(false)
    }, 250)
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
    <div className="quiz-page">
      {/* Back Link */}
      <div className="back-link-wrapper">
        <Link to="/flashcards" className="back-link">
          ← Back to Mode Select
        </Link>
      </div>

      {/* Quiz Header */}
      <div className="quiz-header">
        <h2 className="mode-title">Quiz Mode</h2>
        <div className="mode-progress">
          <p className="progress">Card {currentIndex + 1} of {questionSet.length}</p>
          <p className="score">Score: {score}</p>
        </div>
      </div>

      {/* Quiz Card */}
      <div className="quiz-main">
        <div className="quiz-card">
          <div className="quiz-card-content">
            <QuizCard
              card={currentCard}
              hidden={hidden}
              selectedOption={selectedOption}
              showAnswer={showAnswer}
              showExplanation={showExplanation}
              onOptionClick={handleOptionClick}
              onToggleExplanation={() => setShowExplanation(!showExplanation)}
            />
          </div>
        </div>
      </div>

      {/* Quiz Navigation */}
      <div className="quiz-footer">
        <button onClick={handleShuffle} className="shuffle-btn">
          Shuffle
        </button>

        <div className="nav-group">
          <button
            onClick={handlePrevious}
            className="prev-btn"
            disabled={currentIndex === 0}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            className="next-btn"
            disabled={currentIndex === questionSet.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

