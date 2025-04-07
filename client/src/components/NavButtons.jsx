// src/components/NavButtons.jsx

export default function NavButtons({
    onPrevious,
    onNext,
    onShuffle,
    onReset,
    isShuffled,
    currentIndex,
    total
  }) {
    return (
      <div className="nav-buttons">
        <button
          onClick={onPrevious}
          className="prev-btn"
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="next-btn"
          disabled={currentIndex === total - 1}
        >
          Next
        </button>
  
        <div className="button-row">
          {!isShuffled ? (
            <button onClick={onShuffle} className="next-btn">
              Shuffle
            </button>
          ) : (
            <button onClick={onReset} className="next-btn">
              Reset Order
            </button>
          )}
        </div>
      </div>
    )
  }
  