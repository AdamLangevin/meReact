import React from 'react';
import { render } from '@testing-library/react';

import Pngbutton from './pngbutton';

describe(' Pngbutton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pngbutton />);
    expect(baseElement).toBeTruthy();
  });
});
