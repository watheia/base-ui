import React from 'react';
import { IconFont } from '@watheia/theme.fonts.icon-font';
import { ThemeProvider, ThemeProviderProps } from './theme-provider';

export function DefaultTheme({ children, colorScheme, ...props }: ThemeProviderProps) {
  return (
    <ThemeProvider {...props} colorScheme={colorScheme}>
      <IconFont query="eo46cx" />
      {children}
    </ThemeProvider >
  );
}

export function DarkTheme(props: ThemeProviderProps) {
  return <DefaultTheme colorScheme="light" {...props} />;
}

export function LightTheme(props: ThemeProviderProps) {
  return <DefaultTheme colorScheme="light" {...props} />;
}
