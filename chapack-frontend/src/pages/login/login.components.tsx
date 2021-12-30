import { LoginPageWrapper, LoginContainer, ErrorMessage } from "./login.styles";
import FormInput from "../../components/form-input/form-input.component";
import { useState, useContext } from "react";
import CustomButton from "../../components/button/custom-button/custom-button.component";
import { LoginCredential } from "../../types/auth.type";
import AuthContext from "../../context/auth.provider";
import { storeAccessRefreshToken } from "../../services/token.service";
import axiosApiInstance from "../../utils/axios-instance.util";
import { useNavigate } from "react-router-dom";

const INITIAL_CREDENTIAL = { username: "", password: "" };

export default function LoginPage() {
  const [credential, setCredential] = useState<LoginCredential>(INITIAL_CREDENTIAL);
  const [error, setError] = useState<string | null>(null);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // console.log(`${name}  ${value}`);
    setCredential((prev) => ({ ...prev, [name]: value }));
  };

  const login = async (credential: LoginCredential) => {
    axiosApiInstance
      .post("/api/auth/session", credential)
      .then((response) => {
        const { access_token, refresh_token } = response.data;
        authContext.setUser(response.data.user);
        authContext.setAccessToken(access_token);
        storeAccessRefreshToken(access_token, refresh_token);
        navigate("/");
      })
      .catch((err) => {
        setError("The username or password is incorrect");
        setCredential((prev) => ({ ...prev, password: "" }));
      });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    login(credential);
  };

  return (
    <LoginPageWrapper>
      <LoginContainer>
        <h1>Sign In</h1>
        <span>Sign in with your username and password</span>
        <form onSubmit={handleSubmit}>
          <ErrorMessage> {error} </ErrorMessage>
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
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </LoginContainer>
    </LoginPageWrapper>
  );
}
