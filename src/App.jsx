
import { useState } from 'react';
import './App.css'
import Gameplay from './components/gameplay/Gameplay';
import Startgame from './components/startgame/Startgame'

const App=()=>{
 

  const[isGameStarted, setIsGameStarted] = useState(false);
  const toggleGameButton = ()=>{
    setIsGameStarted((prev)=>!prev);
  };

  return (
    <>
      {isGameStarted ?<Gameplay /> : <Startgame  toggle={toggleGameButton} />  }
      
    </>
  )
}

export default App
