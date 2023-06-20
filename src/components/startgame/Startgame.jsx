

import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";


const Startgame = ({ toggle }) => {
    
  return (
    <>
      <Container>
        <div>
            <img src="images/dices.png" alt="" />
        </div>
        <div className="d-flex flex-column">
          <h1>Start Game</h1>
          <Button onClick={toggle} >Play Now</Button>
        </div>
      </Container>
    </>
  );
};


export default Startgame;

// STYLING HERE



const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 5px;
max-width:1440px;


  h1{
    font-size:96px;
    white-space:nowrap;
  }
`;

