import { BasicThemeContextExample } from './theme-context.composition';
import { render } from '@testing-library/react';

it('should render the button in the color blue', () => {
  const { getByText } = render(<BasicThemeContextExample />);
  const rendered = getByText('this should be light');
  expect(rendered).toBeTruthy();
});
