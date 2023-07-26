import React from 'react';
import "./nav.scss";

function Nav() {
  return (
    <div className='nav d-flex align-items-center'>
        <ul className="nav-items d-flex p-0 m-0">
            <li className="nav-link">Dashboard</li>
            <li className="nav-link">Sales</li>
        </ul>
    </div>
  )
}

export default Nav;