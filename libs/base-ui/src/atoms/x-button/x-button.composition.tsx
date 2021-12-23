import React from 'react';
import { XButton } from './x-button';

export const CloseButton = () => (
  <XButton onClick={() => alert('on click')} data-testid="test-x" />
);
