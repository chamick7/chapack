import React, { useEffect, useState } from "react";
import { CopyButtonContainer } from "./copy-button.styles";
import { IoMdCopy } from "react-icons/io";
import { FiCheck } from "react-icons/fi";

interface Props {
  path?: string;
}

const CopyButton: React.FC<Props> = ({ path }) => {
  const [isCopy, setIsCopy] = useState(false);
  let timeoutId: null | number = null;

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleClick = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsCopy(false);
    if (path) navigator.clipboard.writeText(path);
    setIsCopy(true);
    timeoutId = window.setTimeout(() => {
      setIsCopy(false);
    }, 1500);
  };

  return (
    <CopyButtonContainer>
      <span>{isCopy ? <FiCheck /> : <IoMdCopy />}</span>
      <button onClick={handleClick}>{isCopy ? "copied" : "copy"}</button>
    </CopyButtonContainer>
  );
};

export default CopyButton;
