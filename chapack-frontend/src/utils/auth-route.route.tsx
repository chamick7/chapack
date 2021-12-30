import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/auth.provider";

interface Props {
  element: React.ReactNode;
}

export const AuthRoute: React.FC<Props> = ({ element }) => {
  const { user } = useContext(AuthContext);
  return <>{user ? <Navigate to="/" /> : element}</>;
};
