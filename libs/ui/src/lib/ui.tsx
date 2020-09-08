import React from 'react';

import './ui.css';

import Pngbutton from './pngbutton/Pngbutton';


/* eslint-disable-next-line */
export interface UiProps {}

export const Ui = (props: UiProps) => {
  return (
    <div className="ui">
      <p>content</p>
      <Pngbutton />
    </div>
  );
};

export default Ui;
