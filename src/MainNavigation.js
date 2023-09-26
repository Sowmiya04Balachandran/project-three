import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
