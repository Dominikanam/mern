import React from 'react';
import { FormattedMessage } from 'react-intl';

const AppNav = () => {
  return (
    <nav>
      <ul>
        <li><a href="/home"><FormattedMessage id="home" /></a></li>
        <li><a href="/about"><FormattedMessage id="about" /></a></li>
        <li><a href="/"><FormattedMessage id="posts" /></a></li>
      </ul>
    </nav>
  );
};

export default AppNav;
