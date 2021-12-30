import React from "react";

import { Button } from "./custom-button.styles"

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  [x: string]: any;
}

const CustomButton: React.FC<Props> = (props) => {
  const { children, ...otherProps } = props;
  return <Button {...otherProps}>{children}</Button>;
};

export default CustomButton;
