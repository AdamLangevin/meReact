import React from 'react';
import { render } from '@testing-library/react';

import Ui from './ui';

import { pngbtn } from '@py120/ui';

describe(' Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui />);
    expect(baseElement).toBeTruthy();
  });
});
