import React, { useState } from 'react'
import styled from 'styled-components';
import { Button, OutlineButton } from '../styled/Button';
import Rules from '../rules/Rules';


const Roledice = ({currentDice,setCurrentDice,changedice, setScore}) => {
  const [rules, setRules] = useState(false);
  const toggleRules = () =>{
    setRules((prev)=>!prev)
  }

  return (
    <>
      <Container>
        <img onClick={changedice} src={`dices/dice_${currentDice}.png`} alt="" />
        <p>Click on Dice to roll</p>

       <div className="btns"> 
        <OutlineButton onClick={()=>setScore(0)} >Reset Score</OutlineButton>
        <Button onClick={toggleRules} >{rules ? "Hide":"Show"} Rules</Button>
       </div>
       {rules && <Rules />}
       
      </Container>

    </>
  )
}

export default Roledice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    cursor:pointer;
  }
  .btns{
   padding:10px;
  }
`