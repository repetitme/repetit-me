import React, { createContext, useContext } from 'react';

import { TUserRole } from '../shared/types/userData';

interface AppProviderProps {
  role: TUserRole;
  children: React.ReactNode;
}

const AppContext = createContext<{ role: TUserRole } | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<AppProviderProps> = ({ role, children }) => (
  <AppContext.Provider value={{ role }}>{children}</AppContext.Provider>
);
