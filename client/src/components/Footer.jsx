// src/components/Footer.jsx

export default function Footer({ toggleDarkMode, isDarkMode }) {
    return (
      <footer className="footer">
        <p className="tm">Copyright Brittany Stidd, 2025</p>
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
  