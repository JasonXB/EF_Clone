import React, { createContext, ReactNode, useContext, useState } from 'react';

type authContextType = {
  user: string | null;
  setUser: Function;
  login: (a: string) => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  user: null,
  setUser: () => {},
  login: () => {},
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
  const [user, setUser] = useState<string | null>(null);

  const login = (token: string) => {
    setUser(token);
  };

  const logout = () => {
    setUser('');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
