import styled from "styled-components";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export const CardContainer = styled.div<CardProps>`
  max-width: 90vw;
  width: ${({ width }) => width || "fit-content"};
  ${({ height }) => (height ? `height: ${height};` : "")}
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 7px;
  margin: 1vw 0;
`;
