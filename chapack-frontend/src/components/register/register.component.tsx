import React, { useContext, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/auth.provider";
import { RegisterCredential } from "../../types/auth.type";
import axiosApiInstance from "../../utils/axios-instance.util";
import CustomButton from "../button/custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonContainer, ErrorMessage, RegisterContainer } from "./register.styles";
import Swal from "sweetalert2";
interface Props {
  inviter?: string;
}

const INITIAL_CREDENTIAL = {
  email: "",
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const Register: React.FC<Props> = ({ inviter }) => {
  const [credential, setCredential] = useState<RegisterCredential>(INITIAL_CREDENTIAL);
  const [error, setError] = useState<string | null>(null);
  const { token } = useParams();
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const validatePassword = (): boolean => {
    if (credential.password.length < 6) {
      setError("Password must least 6 character");
      window.scrollTo(0, 0);
      return false;
    }

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
      axiosApiInstance
        .post("/api/user/create-with-token", {
          invite_token: token,
          email: credential.email,
          firstName: credential.firstName,
          lastName: credential.lastName,
          username: credential.username,
          password: credential.password,
        })
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sign Up Success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            logout();
            navigate("/login");
          });
        })
        .catch((error) => {
          if (error.response.status === 409) {
            setError(`This ${error.response.data.duplicate} is already exists`);
            window.scrollTo(0, 0);
          }
        });
    }
  };

  return (
    <RegisterContainer>
      <h1>Sign Up</h1>
      <span>
        Invite by <span className="fw-bolder">{inviter ? inviter : "Unknown"}</span>
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
        <ButtonContainer>
          <CustomButton type="submit">Sign Up</CustomButton>
        </ButtonContainer>
      </form>
    </RegisterContainer>
  );
};

export default Register;
