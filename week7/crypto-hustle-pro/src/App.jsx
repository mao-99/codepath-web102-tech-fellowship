import { useState, useEffect } from 'react'
import CoinInfo from './components/coinInfo';
import './App.css'

const API_KEY=import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null)

  useEffect(() => {
    async function fetchAllCoinData(){
      let url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.Data);
      setList(data.Data);
    }
    fetchAllCoinData().catch(console.error);
    console.log(API_KEY)
  }, [])

  return (
    <>
      <div className="whole-page">
        <h1>My Crypto List</h1>
        <ul>
          {list && Object.entries(list).map(([_, value]) => {
            return value.PlatformType === "blockchain" ? 
              
              <li key={value.FullName}>{value.FullName}
               <CoinInfo name={value.FullName} img={value.imageUrl} symbol={value.Symbol} />
              </li> :
              null;
          })}
        </ul>
      </div>
    </>
  )
}

export default App