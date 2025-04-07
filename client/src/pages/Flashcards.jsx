import { useState } from 'react'
import { Link } from 'react-router-dom'
import flashcards from '../data/flashcards'
import QuizCard from '../components/QuizCard'
import NavButtons from '../components/NavButtons'
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
        <div className="quiz-header">
          <Link to="/flashcards" className="back-link">← Back to Mode Select</Link>
          <h2>Quiz Mode {isShuffled && '(Shuffled)'}</h2>
          <p className="progress">Question {currentIndex + 1} of {questionSet.length}</p>
          <p className="score">Score: {score}</p>
        </div>
    
        <div className="quiz-main">
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
    
        <div className="quiz-footer">
          <NavButtons
            onPrevious={handlePrevious}
            onNext={handleNext}
            onShuffle={handleShuffle}
            onReset={handleReset}
            isShuffled={isShuffled}
            currentIndex={currentIndex}
            total={questionSet.length}
          />
        </div>
      </div>
    )
}
