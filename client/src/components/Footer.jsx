// src/components/Footer.jsx

export default function Footer({ toggleDarkMode, isDarkMode }) {
    return (
      <footer className="footer">
        <p className="tm">RAD With Rick&trade; Brittany Stidd, 2025. All rights Reserved &copy;&trade;</p>
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
  