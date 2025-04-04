import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import Home from './pages/Home'
import About from './pages/About'
import FlashcardModeSelect from './pages/FlashcardModeSelect'
import FlashcardFlip from './pages/FlashcardFlip'
import Flashcards from './pages/Flashcards'
import Settings from './pages/Settings'
import './App.css'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem('dark')
    if (stored !== null) return stored === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
    localStorage.setItem('dark', isDarkMode)
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode(prev => !prev)

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIsDarkMode(true),
    onSwipedRight: () => setIsDarkMode(false),
    preventScrollOnSwipe: true,
    trackTouch: true
  })

  return (
    <Router>
      <div {...swipeHandlers} className="app-wrapper">
        <header>
          <h1>
            <img src="./icons/logo.jpg" alt="Logo" className="logo-intro" />
            RWR
          </h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/flashcards">Flashcards</Link>
            <Link to="/settings">Settings</Link>
          </nav>
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/flashcards" element={<FlashcardModeSelect />} />
            <Route path="/flashcards/quiz" element={<Flashcards />} />
            <Route path="/flashcards/study" element={<FlashcardFlip />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

        <footer>
          <button
            className="toggle-theme"
            onClick={toggleDarkMode}
            aria-label="Toggle dark/light theme"
            title="Toggle dark/light theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </footer>
      </div>
    </Router>
  )
}
