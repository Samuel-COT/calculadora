import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 100%;
  margin: auto;
  margin-top: 30px;
`;

export const StyledButton = styled.button`
  padding: 15px;
  font-size: 2rem;
  background-color: #696969;
  border: 2px solid #ccc;
  cursor: pointer;
  border-radius: 5px;
  color : white; 

  &:hover {
    background-color: #ddd;
  }
`;


export const StyledCalc = styled.div`
  
  border-radius: 10px;
  padding: 20px;
  width: 320px;
  margin: 0 auto;
  background-color: #DCDCDC;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
`;

export const StyledApagar = styled.button`
  background-color: #696969;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 26px;
  border: 2px solid #ccc;

  &:hover {
    background-color: #ddd;
  }

`;

export const StyledIgual = styled.button`
  background-color: #696969;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 30px;
  border: 2px solid #ccc;

  &:hover {
    background-color: #ddd;
  }
`;