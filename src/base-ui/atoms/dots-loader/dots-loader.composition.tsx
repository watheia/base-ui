import React from 'react';
import { DotsLoader } from './dots-loader';
import { Theme } from '@watheia/base-ui.theme.theme-provider';

export const BasicDotsLoader = () => (
  <Theme>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DotsLoader />
    </div>
  </Theme>
);
