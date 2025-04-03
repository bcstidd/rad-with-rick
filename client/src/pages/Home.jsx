import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error('Error fetching from backend:', err)
        setMessage('⚠️ Could not connect to the backend')
      })
  }, [])

  return (
    <div>
      <h2>Welcome to RAD With Rick 🧠</h2>
      <p>This app is built to help you review dental radiology and pass the DANB exam.</p>
      <hr />
      <p><strong>Server says:</strong> {message}</p>
    </div>
  )
}
