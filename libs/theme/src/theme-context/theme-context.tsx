import { createContext } from 'react';
import { ProviderProps } from '@react-types/provider';

export type ThemeContextProps = Omit<ProviderProps, 'children'>;

export const ThemeContext = createContext<ThemeContextProps>({
  defaultColorScheme: 'light',
});
