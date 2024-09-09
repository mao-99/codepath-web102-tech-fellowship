import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [rate, setRate] = useState(1)

  const handleImgClick = () => {
    setCount(count + rate);
  }

  const handleDoubleStuffed = () => {
    if (count >= 10){
      setCount(count-10);
      setRate(rate * 2);
    }
  }

  const handlePartyPack = () => {
    if (count >= 100){
      setCount(count-100);
      setRate(rate * 5);
    }
  }

  const handleFullFeast = () => {
    if (count >= 1000){
      setCount(count-1000);
      setRate(rate * 10);
    }
  }

  return (
    <>
      <main>
        <section className='header'>
          <h1>Samosa Selector</h1>
          <h2>Count: {count}</h2>
          <img src="/samosa.png" alt="Samosa Picture" onClick={handleImgClick}/>
        </section>
        <section className='main'>
          <div className='card'>
            <h3>Double Stuffed</h3>
            <p>2x per click</p>
            <button onClick={handleDoubleStuffed}>10 samosas</button>
          </div>
          <div className='card'>
            <h3>Party Pack</h3>
            <p>5x per click</p>
            <button onClick={handlePartyPack}>100 samosas</button>
          </div>
          <div className='card'>
            <h3>Full Feast</h3>
            <p>10x per click</p>
            <button onClick={handleFullFeast}>1000 samosas</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
