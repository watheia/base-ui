import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';

export function MockComponent() {
  const theme = useContext(ThemeContext);
  return <div>this should be {theme.defaultColorScheme}</div>;
}

export const BasicThemeContextExample = () => {
  return (
    <ThemeContext.Provider value={{ defaultColorScheme: 'light' }}>
      <MockComponent />
    </ThemeContext.Provider>
  );
};
