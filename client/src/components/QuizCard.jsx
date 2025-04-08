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
      <p className="question">{card.question}</p>
      <ul className="options">
        {card.options.map((option, index) => (
          <li
            key={index}
            onClick={() => onOptionClick(option)}
            className={
              selectedOption
                ? option === card.answer
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

      {showAnswer && showExplanation && (
        <p className="explanation">{card.explanation}</p>
      )}
    </div>
  )
}
