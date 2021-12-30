import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
`;

export const LoginContainer = styled.div`
  padding: 0 10px;
  width: 500px;
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.h6`
  width: 100%;
  color: red;
  text-align: center;
  margin: 10px 0;
  font-weight: bolder;
`;
