import { useState } from 'react'
import './App.css'
import Calendar from './components/calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Itinerary for 7 days back from vacation</h1>
        <h2>This is a schedule of what my week will look like for next week.</h2>
        <Calendar/>
      </div>
    </>
  )
}

export default App
