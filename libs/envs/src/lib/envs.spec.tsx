import { render } from '@testing-library/react';

import Envs from './envs';

describe('Envs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Envs />);
    expect(baseElement).toBeTruthy();
  });
});
