import React from 'react';
import { render } from '@testing-library/react';

import PopIcon from './pop-icon';

describe('PopIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PopIcon />);
    expect(baseElement).toBeTruthy();
  });
});
