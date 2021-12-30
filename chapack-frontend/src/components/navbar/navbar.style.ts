import styled from "styled-components";

export const CustomNavbar = styled.nav`
  font-size: 20px;
  min-height: 70px;
  position: relative;
  background-color: ${process.env.REACT_APP_MAIN_COLOR} !important;

  .navbar-brand {
    font-size: 25px;
  }

  .pointer {
    cursor: pointer;
  }
`;
