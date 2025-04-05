import { useState, useEffect } from "react"

const API_KEY=import.meta.env.VITE_APP_API_KEY;

export default function CoinInfo({img, name, symbol}){
    const [price, setPrice] = useState(null);
    useEffect(() => {
        async function getCoinPrice(){
            let url = `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD,JPY,EUR&api_key=${API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            setPrice(data);
        }

        getCoinPrice().catch(console.error);
    }, [symbol])
    return (
        <>
            {price ? ( // rendering only if API call actually returned us data
                <div className="main-list" key={symbol}>
                    <img
                    className="icons"
                    src={`https://www.cryptocompare.com${img}`}
                    alt={``}
                    />
                    {name} <span className="tab"></span> ${price.USD} USD
                </div>
            ) : 
            null
            }
        </>
    )
}