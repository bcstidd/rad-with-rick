// App.jsx
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import FlashcardModeSelect from './pages/FlashcardModeSelect'
import FlashcardFlip from './pages/FlashcardFlip'
import Flashcards from './pages/Flashcards'
import './App.css'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : ''
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev
      localStorage.setItem('theme', newMode ? 'dark' : 'light')
      return newMode
    })
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Router>
        <header>
          <h1>RAD With Rick</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/flashcards">Flashcards</Link>
          </nav>
          <button className="toggle-theme" onClick={toggleTheme}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/flashcards/quiz" element={<Flashcards />} />
          <Route path="/flashcards/study" element={<FlashcardFlip />} />
          <Route path="/flashcards" element={<FlashcardModeSelect />} />
        </Routes>
      </Router>
    </div>
  )
}
