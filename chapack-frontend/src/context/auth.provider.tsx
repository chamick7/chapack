import { createContext, useEffect, useState } from "react";

import UserType from "../../../chapack-backend/src/models/user.model";
import { clearToken, decodeToken } from "../services/token.service";
import axiosApiInstance from "../utils/axios-instance.util";

interface AuthContextType {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
  logout: Function;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  accessToken: null,
  setAccessToken: () => {},
  logout: () => {},
});

export default AuthContext;

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(() =>
    localStorage.getItem("access_token") ? localStorage.getItem("access_token") : null
  );
  const [isLoading, setIsLoading] = useState(true);

  const logout = async () => {
    setUser(null);
    clearToken();
  };

  useEffect(() => {
    if (accessToken) {
      const userDecoded = decodeToken(accessToken) as UserType;
      setUser(userDecoded);
    }

    
    // console.log(children);

    setIsLoading(false);
  }, []);

  const contextData = {
    user,
    setUser,
    accessToken,
    setAccessToken,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>{isLoading ? null : children}</AuthContext.Provider>
  );
};
