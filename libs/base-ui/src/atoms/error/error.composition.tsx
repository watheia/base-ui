import React from 'react';
import { Error } from './error';

export const ErrorMessage = () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Error>error message!</Error>
    </div>
);
