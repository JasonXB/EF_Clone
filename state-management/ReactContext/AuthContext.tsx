import React, { createContext, ReactNode, useContext, useState } from 'react';
import { storeCredentialsInLocalStorage } from '../../src/api/localStorage';

type authContextType = {
  username: string | null;
  setUsername: Function;
  accessToken: string;
  isLoggedIn: Function;
  clientSideLogin: (username: string, token: string) => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  username: null,
  setUsername: () => {},
  accessToken: '',
  isLoggedIn: () => {},
  clientSideLogin: () => {},
  logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type AuthContextProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthContextProps) {
  const [username, setUsername] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string>('');

  function clientSideLogin(username: string, token: string) {
    setUsername(username);
    setAccessToken(token);
    storeCredentialsInLocalStorage(token);
  }

  const isLoggedIn = () => {
    return !!accessToken;
  };

  function logout() {
    setUsername('');
    // todo: redirect to lander
  }

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        accessToken,
        isLoggedIn,
        clientSideLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
