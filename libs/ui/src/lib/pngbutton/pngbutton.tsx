import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './pngbutton.css';
import test from '../test.png';
import d from '../service-desk.png';
const desk1 = new Image();
desk1.src = '../service-desk.png';

/* eslint-disable-next-line */
export interface PngbuttonProps {}
export interface HnAPIProps {}

const useStyles = makeStyles({
    main: {
      height:'50%',
    },
    Container:{
      width:'42%',
      alignContent: 'center',
      margin: 'auto',
    }
});

export const Pngbutton = (props: PngbuttonProps) => {
  const classes = useStyles();
  return (
    <div className={classes.Container}>
        <img className={classes.main} src={d} />
        
    </div>
  );
};

export default Pngbutton;

