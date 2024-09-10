import { useState } from 'react'
import axios from 'axios'
import RightBar from './components/rightBar'
import LeftBar from './components/leftBar'
import './App.css'

function App() {

  const [allCats, setAllCats] = useState([])
  const [banned, setBanned] = useState({weight: [], height: [], lifeSpan: []})
  const handleClick = async () => {
    let response = await axios.get("https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_u5Ho4LJMcVvmepRpIuf7sjz8flE7uaWUFu55zaOHGaSb7dKxR2qdZiae4hFuxnU6")
    response = response.data
    console.log(response)
    // Combine the checks into a single loop
    while (
      banned.height.includes(response[0].breeds[0].height.metric) ||
      banned.weight.includes(response[0].breeds[0].weight.metric) ||
      banned.lifeSpan.includes(response[0].breeds[0].life_span)
    ) {
      response = await axios.get(
        "https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_u5Ho4LJMcVvmepRpIuf7sjz8flE7uaWUFu55zaOHGaSb7dKxR2qdZiae4hFuxnU6"
      );
      response = response.data
    }
    setCat(response[0]);
    setAllCats((prevCats) => [...prevCats, response[0]]);
  }
  const handleBan = (e) => {
    console.log(e);
    const [value, att] = [e.target.innerHTML, e.target.attributes.att.nodeValue];
  
    setBanned((prevBanned) => {
      // Ensure the attribute exists in the current banned state or initialize it to an empty array
      const currentValues = prevBanned[att] || [];
    
      // Check if the value is already present
      if (currentValues.includes(value)) {
        return prevBanned; // No change needed, so return the current state
      }
    
      // Add the new value to the banned state
      return {
        ...prevBanned,
        [att]: [...currentValues, value], // Append the new value to the existing array
      };
    });
  }
    
  const [cat, setCat] = useState({url: "", name: "", height: "", lifeSpan: "", weight: "", breeds: [{name: ""}]})

  return (
    <main className='flex flex-row justify-between w-full h-full'>
      <LeftBar cats={allCats}/>
      <section className='flex flex-col flex-grow mt-28 justify-start'>
        <h1 className='text-3xl font-bold underline font-white mb-8'>Bad 2 D Bone</h1>
        <h3 className='text-xl font-extralight mb-4'><em>Lets check out some cute dogs</em></h3>
        <section className='card w-8/12 h-2/4 m-auto border-2 border-white p-8 justify-between align-middle flex flex-col text-center rounded-lg flex-grow'>
            <h2 className='text-2xl font-bold'>{cat.breeds[0].name}</h2>
            <span className='flex flex-row w-full justify-center'>
              <button className='mx-4' att="lifeSpan" onClick={handleBan}>{allCats.length > 0 ? cat.breeds[0].life_span : ""}</button>
              <button className='mx-4' att="height" onClick={handleBan}>Height: {allCats.length > 0 ? cat.breeds[0].height.metric : ""}</button>
              <button className='mx-4' att='weight' onClick={handleBan}>Weight: {allCats.length > 0 ? cat.breeds[0].weight.metric : ""}</button>
            </span>
            <p><img src={cat.url} alt={cat.breeds[0].name} className='mx-auto rounded-lg' width={320} height={200}/></p>
            <button className="mx-auto" onClick={handleClick}>Discover</button>
        </section>
      </section>        
      <RightBar banned={banned}/>
    </main>
  )
}

export default App
