import { createContext, useContext } from 'react';

type ThemeContextType = "light" | "dark";

const AppContext = createContext<ThemeContextType>('light');

export default AppContext;