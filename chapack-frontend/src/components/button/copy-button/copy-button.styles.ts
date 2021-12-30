import styled from "styled-components";

const primaryColor = "#2DA44F";
const secondaryColor = "white";

export const CopyButtonContainer = styled.div`
  position: relative;
  font-size: 22px;
  border: 2px solid ${primaryColor};
  border-radius: 2px;

  button {
    border: none;
    background: none;
    background-color: ${primaryColor};
    color: ${secondaryColor};
    font-weight: bolder;
    padding: 5px 15px;
    outline: none;
  }

  button:focus {
    outline: none;
  }

  span {
    width: 50px;
    height: 10px;
    text-align: center;
    color: ${primaryColor};
    font-size: 25px;
  }
`;
