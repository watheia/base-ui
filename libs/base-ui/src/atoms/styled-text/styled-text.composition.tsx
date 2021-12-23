import React from 'react';
import { StyledText, mutedText } from './styled-text';

export const StyledTextExample = () => (
  <StyledText>Muted text</StyledText>
);

export const UsingStyledTextClassName = () => (
  <span className={mutedText}>Muted text with class name</span>
);
