import React, { createContext, ReactNode, useContext, useState } from 'react';
import { storeCredentialsInLocalStorage } from '../../src/api/localStorage';

type authContextType = {
  email: string | null;
  setEmail: Function;
  accessToken: string;
  isLoggedIn: Function;
  clientSideLogin: (username: string, token: string) => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  email: null,
  setEmail: () => {},
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
  const [email, setEmail] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string>('');

  function clientSideLogin(email: string, token: string) {
    setEmail(email);
    setAccessToken(token);
    storeCredentialsInLocalStorage(token);
  }

  const isLoggedIn = () => {
    return !!accessToken;
  };

  function logout() {
    setEmail('');
    setAccessToken('');
    // todo: redirect to lander
  }

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
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
