import React from "react";
import { CardContainer } from "./card.styles";

interface CardProps {
  width?: string;
  height?: string;
}

const Card: React.FC<CardProps> = ({ children, width, height, ...otherProps }) => {
  return (
    <CardContainer width={width} height={height} {...otherProps}>
      {children}
    </CardContainer>
  );
};

export default Card;
