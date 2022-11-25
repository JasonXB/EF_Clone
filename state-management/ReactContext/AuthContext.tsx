import React, { createContext, ReactNode, useContext, useState } from 'react';
import {
  storeCredentialsInLocalStorage,
  storeProfileIdInLocalStorage,
} from '../../src/api/localStorage';

type authContextType = {
  email: string | null;
  setEmail: Function;
  accessToken: string;
  isLoggedIn: Function;
  clientSideLogin: (username: string, token: string, profileId: string) => void;
  logout: () => void;
  profileId: string;
};

const authContextDefaultValues: authContextType = {
  email: null,
  setEmail: () => {},
  accessToken: '',
  isLoggedIn: () => {},
  clientSideLogin: () => {},
  logout: () => {},
  profileId: '',
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
  const [profileId, setProfileId] = useState<string>('');

  function clientSideLogin(email: string, token: string, profileId: string) {
    setEmail(email);
    setAccessToken(token);
    storeCredentialsInLocalStorage(token);
    setProfileId(profileId);
    storeProfileIdInLocalStorage(profileId);
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
        profileId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
