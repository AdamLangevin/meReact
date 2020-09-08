import React from 'react';
import { render } from '@testing-library/react';

import Newsbtn from './newsbtn';

describe('Newsbtn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Newsbtn />);
    expect(baseElement).toBeTruthy();
  });
});
