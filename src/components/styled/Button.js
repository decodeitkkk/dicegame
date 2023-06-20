import styled from "styled-components";

export const Button = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 18px;
gap: 10px;

width: 220px;
height: 44px;
font-size:16px;


margin-bottom:10px;
background: #000000;
border-radius: 5px;
color:white;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
transition:0.3s background ease-in;
&:hover{
  background-color:white;
  color:black;
  cursor:pointer;
  transition:0.3s background ease-in;
}
`;

export const OutlineButton = styled(Button)`

background: white;
border-radius: 5px;
color:Black;

&:hover{
  background-color:black;
  color:white;
  
}
`;