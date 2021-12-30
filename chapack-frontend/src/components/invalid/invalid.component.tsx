import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IconContainer, MessageContainer } from "./invalid.styles";

interface Props {
  message?: string;
}

const Invalid: React.FC<Props> = ({ message }) => {
  return (
    <div className="d-flex flex-column">
      <IconContainer>
        <AiOutlineCloseCircle />
      </IconContainer>
      <MessageContainer>
        <h1 className="fw-bolder">{message}</h1>
        <h2>Please contact administrator</h2>
      </MessageContainer>
    </div>
  );
};

export default Invalid;
