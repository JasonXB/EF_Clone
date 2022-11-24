import React, { createContext, ReactNode, useContext, useState } from 'react';
import { storeCredentialsInLocalStorage, storeProfileIdInLocalStorage } from '../../src/api/localStorage';

type authContextType = {
  email: string | null;
  setEmail: Function;
  accessToken: string;
  profileID: string;
  isLoggedIn: Function;
  clientSideLogin: (username: string, token: string, id: string) => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  email: null,
  setEmail: () => {},
  accessToken: '',
  profileID: '',
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
  const [profileID, setProfileID] = useState<string>('');

  function clientSideLogin(email: string, token: string, profileId: string) {
    setEmail(email);
    setAccessToken(token);
    setProfileID(profileId)
    storeCredentialsInLocalStorage(token);
    storeProfileIdInLocalStorage(profileId);
  }

  const isLoggedIn = () => {
    return !!accessToken;
  };

  function logout() {
    setEmail('');
    setAccessToken('');
    setProfileID('')
    // todo: redirect to lander
  }

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        accessToken,
        profileID,
        isLoggedIn,
        clientSideLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
