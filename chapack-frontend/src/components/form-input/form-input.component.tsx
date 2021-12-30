import React from "react";
import { InputContainer, Input, InputLabel } from "./form-input.styles";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  handleChange: Function;
  label: string;
  type: string;
  name: string;
  [x: string]: any;
}

const FormInput: React.FC<InputProps> = (props) => {
  const { handleChange, label, value, ...otherProps } = props;
  return (
    <InputContainer>
      <Input {...otherProps} value={value} onChange={handleChange as React.ChangeEventHandler} />
      <InputLabel className={`${value.length ? "shrink" : ""}`}>{label}</InputLabel>
    </InputContainer>
  );
};

export default FormInput;
