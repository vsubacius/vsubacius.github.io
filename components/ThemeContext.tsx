import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<{theme: Theme; toggle: ()=>void}>({theme: 'light', toggle: () => {}});

export const ThemeProvider = ({children}:{children: React.ReactNode}) => {
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as Theme | null;
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
