import React from 'react';
import me from '../../images/me.jpg';

const AboutImg = ({ alt }) => (
  <img src={me} alt={alt || 'Profile'} width={350} height={350} />
);

export default AboutImg;
