import styled from "styled-components";

export const InvitePageContainer = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QRCodeContainer = styled.div`
  height: auto;
  width: 300px;
  max-width: 92vw;
  margin: 5px;

  .qr {
    height: auto !important;
    width: 100% !important;
    max-width: 90vw;
  }
`;

export const UrlContainer = styled.div`
  width: 800px;
  max-width: 92vw;
  padding: 20px 30px;
  border: 4px solid black;
  background-color: #fff;
  margin: 15px 0;
  border-radius: 5px;

  .url-holder {
    width: 100%;
    overflow-y: auto;
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  width: 800px;
  max-width: 92vw;
  display: flex;
  justify-content: space-around;
`;


const primaryColor = "#F76E60";
const secondaryColor = "white";

export const LinkButton = styled.div`
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
