import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/Home" className={location.pathname === '/Home' ? 'active' : ''}>
            Home
          </Link>
        </li>
        
        
        <li>
          <Link to="/Votes" className={location.pathname === '/Votes' ? 'active' : ''}>
           Start To Vote
          </Link>
        </li>
        
           
           
         
        <li>
          <Link to="/Helps" className={location.pathname === '/Helps' ? 'active' : ''}>
            Help
          </Link>
        </li>
        <li>
          <Link to="/logout" className={location.pathname === '/logout' ? 'active' : ''}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
