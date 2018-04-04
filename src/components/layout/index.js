import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Layout = ({ children }) => (
  <div>
    <Link to="/" href="/">
      <h1 className="h1">React + Webpack</h1>
    </Link>
    {children}
  </div>
);

export default Layout;
