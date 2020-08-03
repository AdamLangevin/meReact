import React from 'react';

import { Route, Link } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import rightArrow from "./right-arrow-png-transparent-23.png";

import './nav-bar.css';
import { listenerCount } from 'stream';

/* eslint-disable-next-line */
export interface NavBarProps {}

// declare module "*.png" {
//   const content: string;
//   export default content;
// }

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const NavBar = (props: NavBarProps) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

const toggleDrawer = (anchor: Anchor, open: boolean) => (
  event: React.KeyboardEvent | React.MouseEvent,
) => {
  if( event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')){
    return;
  }

  setState({ ...state, [anchor]: open });
};

const list = (anchor: Anchor) => (
  <div className='drawer' role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
    <List>
      {['Home', 'Tech Interests', 'Personal Interests', 'Contact'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['Git', 'Linked IN', 'Resumee'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </div>
);

  return (
    <div className='drawerContainer'>
       {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer("left", true)}>
              <div className="drawerShadow">
                <img className="rightArrow" src={rightArrow} /> 
              </div>
            </Button>
          <Drawer anchor='left' open={state[anchor]} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
       ))}
    </div>
  );
};

export default NavBar;
