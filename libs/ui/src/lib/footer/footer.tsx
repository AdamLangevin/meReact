import React from 'react';

import { Route, Link } from 'react-router-dom';

import { SocialIcon } from 'react-social-icons';

import './footer.css';

let linked = 'https://www.linkedin.com/in/adam-langevin-38a13961/';
let socialStyle = {height: 30, width: 30, margin: 3};

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <div className="footer">
      <p className="text"> <br />Site made by Adam Langevin<br /></p>
      <div className="socialContainer">
        <SocialIcon network="github" url="https://www.github.com/AdamLangevin" style={socialStyle} bgColor="#65237d" />
        <SocialIcon network="linkedin" url={linked}  style={socialStyle} bgColor="#65237d" />
      </div>
    </div>
  );
};

export default Footer;