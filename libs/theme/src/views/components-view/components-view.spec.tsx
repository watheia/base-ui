import React from 'react';
import { render } from '@testing-library/react';
import { BasicComponentsView } from './components-view.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicComponentsView />);
  const rendered = getByText('hello from ComponentsView');
  expect(rendered).toBeTruthy();
});
