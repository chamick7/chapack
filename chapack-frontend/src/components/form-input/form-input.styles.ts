import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

export const InputContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

const shrinkInput = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const InputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.3s ease all;

  &.shrink {
    ${shrinkInput}
  }
`;

interface InputPropsType {
  type: string;
}

const inputPasswordStyle = css`
  letter-spacing: 0.3em;
`;

export const Input = styled.input<InputPropsType>`
  background: none;
  background-color: white;
  color: ${mainColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${mainColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${InputLabel} {
    ${shrinkInput}
  }

  ${({ type }) => (type === "password" ? inputPasswordStyle : null)}
`;
