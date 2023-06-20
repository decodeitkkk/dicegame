import React, { useState } from 'react'
import TotalScore from '../totalscore/TotalScore'
import NumberSelector from '../numberSelector/NumberSelector'
import styled from 'styled-components'
import Roledice from '../roledice/Roledice'


const Gameplay = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const changedice = () =>{
    if(!selectedNumber){
      setError("You have not selected any number")
      return
    }

    const number = Math.floor(Math.random()*6)+1;
    setCurrentDice(number)

    if(number===selectedNumber){
      setScore((prev)=>prev+number)
    }
    else{
      setScore((prev)=>prev-number)
    }
    setSelectedNumber(undefined)
  }

  return (
    <>

    <Main>
        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
    </Main>
    <Rd>
        <Roledice setScore={setScore} changedice={changedice} currentDice={currentDice} setCurrentDice={setCurrentDice} />
    </Rd>
    </>
  )
}

export default Gameplay;

const Main = styled.div`
margin: 70px 2vw;
display:flex;
justify-content:space-between;
align-items:center;
`
const Rd = styled.div`
display: flex;
justify-content: center;
`