// src/components/Footer.jsx

export default function Footer({ toggleDarkMode, isDarkMode }) {
    return (
      <footer className="footer">
        <button
          className="toggle-theme"
          onClick={toggleDarkMode}
          aria-label="Toggle dark/light theme"
          title="Toggle dark/light theme"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </footer>
    )
  }
  