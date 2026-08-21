import { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextType = {
  email: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  login: (access: string, refresh: string, email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>(() => localStorage.getItem('userEmail'));
  const [accessToken, setAccessToken] = useState<string | null>(() => localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState<string | null>(() => localStorage.getItem('refreshToken'));

  const login = (access: string, refresh: string, userEmail: string) => {
    setAccessToken(access);
    setRefreshToken(refresh);
    setEmail(userEmail);
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
    localStorage.setItem('userEmail', userEmail);
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    setEmail(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userEmail');
  };

  return (
    <AuthContext.Provider value={{ email, accessToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
