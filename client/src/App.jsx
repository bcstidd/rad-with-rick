import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import FlashcardModeSelect from './pages/FlashcardModeSelect'
import FlashcardFlip from './pages/FlashcardFlip'
import Flashcards from './pages/Flashcards'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem('dark')
    return stored ? JSON.parse(stored) : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    localStorage.setItem('dark', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode(prev => !prev)

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main className="container">
          <div className='screen-body'>
            <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/flashcards" element={<FlashcardModeSelect />} />
            <Route path="/flashcards/quiz" element={<Flashcards />} />
            <Route path="/flashcards/study" element={<FlashcardFlip />} />
          </Routes>
          </div>
          </div>
        </main>
        <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </Router>
  )
}
