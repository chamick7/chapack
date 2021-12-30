import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { RegisterCredential } from "../../types/auth.type";
import CustomButton from "../button/custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { ErrorMessage, RegisterContainer } from "./register.styles";

const INITIAL_CREDENTIAL = {
  email: "",
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [credential, setCredential] = useState<RegisterCredential>(INITIAL_CREDENTIAL);
  const [error, setError] = useState<string | null>(null);
  const { token } = useParams();

  const validatePassword = (): boolean => {
    if (credential.password !== credential.confirmPassword) {
      setError("Password not match");
      setCredential((prev) => ({ ...prev, confirmPassword: "" }));
      window.scrollTo(0, 0);
      return false;
    }

    return true;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCredential((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (validatePassword()) {
    }
  };

  return (
    <RegisterContainer>
      <h1>Sign Up</h1>
      <span>
        Invite by <span className="fw-bolder">Mick</span>
      </span>
      <form onSubmit={handleSubmit}>
        <ErrorMessage> {error} </ErrorMessage>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={credential.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="firstName"
          label="First Name"
          value={credential.firstName}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="lastName"
          label="Last Name"
          value={credential.lastName}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="username"
          label="Username"
          value={credential.username}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={credential.password}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={credential.confirmPassword}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </RegisterContainer>
  );
};

export default Register;
