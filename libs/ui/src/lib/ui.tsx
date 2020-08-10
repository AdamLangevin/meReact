import React from 'react';

import './ui.css';

/* eslint-disable-next-line */
export interface UiProps {}

export const Ui = (props: UiProps) => {
  return (
    <div className="ui">
      <p>content</p>
      {/* <img src="./test.png" /> */}
    </div>
  );
};

export default Ui;
