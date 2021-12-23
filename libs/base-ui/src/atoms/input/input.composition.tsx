import React from 'react';
import { Input, TextArea } from './input';

export const InputExample = () => (
  <Input error={false} placeholder="enter text..." data-testid="test-input" />
);

export const InputWithError = () => (
  <Input error={true} data-testid="test-input" />
);

export const TextAreaExample = () => (
  <TextArea
    error={false}
    placeholder="multiline text..."
    data-testid="test-textarea"
  />
);

export const TextAreaWithError = () => (
  <TextArea error={true} data-testid="test-textarea" />
);
