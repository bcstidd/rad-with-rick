import ytho from '/icons/ytho.jpg'

export default function QuizCard({
  card,
  hidden,
  selectedOption,
  showAnswer,
  showExplanation,
  onOptionClick,
  onToggleExplanation,
}) {
  return (
    <div className={`quiz-card ${hidden ? 'hidden' : ''}`}>
      {/* Optional Image Display */}
      {card.image && (
        <div className="quiz-image-wrapper">
          <img
            src={card.image}
            alt="Quiz visual"
            className="quiz-image"
          />
        </div>
      )}

      {/* Question */}
      <p className="question">{card.question}</p>

      {/* Answer Options */}
      <ul className={`options ${showAnswer ? 'answered' : ''}`}>
        {card.options.map((option, index) => {
          let className = ''
          if (showAnswer && selectedOption !== null) {
            if (option === card.answer) {
              className = 'correct'
            } else if (option === selectedOption) {
              className = 'incorrect'
            }
          }

          return (
            <li
              key={index}
              onClick={() => onOptionClick(option)}
              className={className}
            >
              {option}
            </li>
          )
        })}
      </ul>

      {/* Explanation Trigger */}
      {showAnswer && (
        <div className='ytho-container'>
          <img
            src={ytho}
            alt="Why is this correct/incorrect?"
            className="ytho"
            onClick={onToggleExplanation}
            draggable="false"
          />
          <p className='ytho-text'>yTho?</p>
        </div>
      )}

      {/* Explanation Content */}
      {showAnswer && showExplanation && (
        <p className="explanation">{card.explanation}</p>
      )}
    </div>
  )
}