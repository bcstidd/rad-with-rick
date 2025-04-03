import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Flashcards from './pages/Flashcards'
import './App.css'


export default function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>RAD With Rick</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/flashcards">Flashcards</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/flashcards" element={<Flashcards />} />

        </Routes>
      </div>
    </Router>
  )
}

