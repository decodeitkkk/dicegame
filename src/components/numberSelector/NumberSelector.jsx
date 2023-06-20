import React, { useState } from 'react'
import styled from 'styled-components';

const NumberSelector = ({error, setError ,selectedNumber,setSelectedNumber}) => {
    const numberArray = [1,2,3,4,5,6];
    console.log(selectedNumber);
    
    const numberSelectorHandler = (value) =>{
        setSelectedNumber(value)
        setError("")
    }

  return (
    <>
    <NumberSelectorContainer>
        <p className='error' >{error}</p>
        <div className='flex' >
            {numberArray.map((value,i)=>
                <Box 
                    isSelected = { value === selectedNumber}
                    onClick={()=>numberSelectorHandler(value)}
                    
                    key={i} >
                        {value} 
                </Box>
            )}
        </div>
        <p>
            Select a number
        </p>
    </NumberSelectorContainer>
        
    </>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    
    .error{
        color:red;
        font-weight: 300;
        font-size: 18px;
        display: flex;
        justify-content: start;
    }
    .flex{
        display: flex;
        gap:24px;
    }
    p{
        font-size:24px;
        font-weight:bold;
        display:flex;
        justify-content:end;
    }

`

const Box = styled.div`
height:72px;
width:72px;
background-color:red;
display:grid;
place-items:center;
font-size:24px;

background-color:white;
color:black;
border: 1px solid black;
cursor:pointer;

background-color:${(props)=> props.isSelected ? "black":"white"};
color:${(props)=> !props.isSelected ? "black":"white"};

`