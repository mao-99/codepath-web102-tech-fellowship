import { useState } from 'react'
import Gallery from './components/gallery'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='header'>
        <h1>This is a gallery of Liverpool Football Club's next few soccer games</h1>
        <h1>&#9917;&#9917;&#9917;</h1>
      </section>
     <Gallery/>
    </>
  )
}

export default App
