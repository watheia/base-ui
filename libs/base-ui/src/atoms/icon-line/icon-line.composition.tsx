import React from 'react';
import { IconLine } from './icon-line';
import {IconFont} from "@watheia/theme.fonts.icon-font"

export const IconLineExample = () => (
  <>
    <IconFont />
    <IconLine
      icons={[
        'logo-react',
        'logo-vue',
        'logo-angular',
        'logo-web-components',
        'logo-ts',
        'logo-js',
      ]}
      data-testid="test-iconline"
    />
  </>
);
