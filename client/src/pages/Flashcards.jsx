import { useState } from 'react'
import './Flashcards.css'

// Flashcards array (multiple choice format)
const flashcards = [
  {
    question: "What does ALARA stand for?",
    options: [
      "As Long As Radiation Acts",
      "All Levels Are Really Acceptable",
      "As Low As Reasonably Achievable",
      "Always Limit All Radiation Application"
    ],
    answer: "As Low As Reasonably Achievable"
  },
  {
    question: "What is the purpose of a bitewing radiograph?",
    options: [
      "To capture impacted teeth",
      "To detect interproximal decay and bone levels",
      "To visualize nasal cavities",
      "To track root canal treatment"
    ],
    answer: "To detect interproximal decay and bone levels"
  },
  {
    question: "Which tissue is most sensitive to radiation?",
    options: [
      "Muscle",
      "Skin",
      "Bone",
      "Reproductive tissue"
    ],
    answer: "Reproductive tissue"
  },
  {
    question: "What is the recommended minimum distance a healthcare worker should stand from the x-ray tube head during exposure?",
    options: ["3 feet", "4 feet", "5 feet", "6 feet"],
    answer: "6 feet"
  },
  {
    question: "Which radiograph is best for evaluating third molars?",
    options: ["Cephalometric", "Periapical", "Bitewing", "Panoramic"],
    answer: "Panoramic"
  },
  {
    question: "What does the milliamperage (mA) setting on an x-ray machine control?",
    options: ["X-ray penetration", "Exposure time", "Quantity of x-rays", "Film speed"],
    answer: "Quantity of x-rays"
  },
  {
    question: "Which landmark appears radiolucent on a periapical radiograph of the maxillary central incisors?",
    options: ["Mental foramen", "Nasal spine", "Incisive foramen", "Median palatine suture"],
    answer: "Incisive foramen"
  },
  {
    question: "What error causes overlapping of the proximal surfaces on a bitewing radiograph?",
    options: ["Incorrect film placement", "Incorrect vertical angulation", "Incorrect horizontal angulation", "Too much exposure time"],
    answer: "Incorrect horizontal angulation"
  },
  {
    question: "What is the effect of increasing the kilovoltage peak (kVp) setting?",
    options: ["Lower penetration and higher contrast", "Increased penetration and lower contrast", "Shorter exposure time", "Increased image size"],
    answer: "Increased penetration and lower contrast"
  },
  {
    question: "Which type of cells are most sensitive to radiation?",
    options: ["Nerve cells", "Muscle cells", "Rapidly dividing cells", "Fat cells"],
    answer: "Rapidly dividing cells"
  }
]

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)

  const currentCard = flashcards[currentIndex]

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
    setCurrentIndex((prev) => (prev + 1) % flashcards.length)
  }

  return (
    <div className="quiz-container">
      <h2>Quiz Mode</h2>
      <p className="progress">Question {currentIndex + 1} of {flashcards.length}</p>
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

      <button onClick={handleNext} className="next-btn">
        {currentIndex === flashcards.length - 1 ? "Restart" : "Next"}
      </button>
    </div>
  )
}
