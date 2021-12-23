import React, { HtmlHTMLAttributes, HTMLDivElement } from 'react';
import clsx from 'clsx';

import {
  headingFontSize,
  textFontSize,
  spacing,
} from '@watheia/theme.styles.size-definition';
import { shadowTheme } from '@watheia/theme.styles.shadow-definition';
import { primaryPalette } from '@watheia/theme.styles.color-definition';
import { brands } from '@watheia/theme.styles.brand-definition';
import { headingMargins } from '@watheia/theme.styles.heading-margin-definition';
import { sansFont } from '@watheia/theme.fonts.clean';
import { ThemeContextProps } from '@watheia/theme.theme-context';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { ComponentsView } from "@watheia/theme.views.components-view"

export type ThemeProviderProps = ThemeContextProps &
  HtmlHTMLAttributes<HTMLDivElement>;

export const className = clsx(
  headingFontSize,
  textFontSize,
  spacing,
  shadowTheme,
  primaryPalette,
  brands,
  headingMargins,
  sansFont
);

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * @example
 * <DefaultTheme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </DefaultTheme>
 */
export function ThemeProvider({
  colorScheme,
  theme,
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <Provider theme={theme ?? defaultTheme} colorScheme={colorScheme}>
      <div className={className}>{children}</div>
    </Provider>
  );
}
