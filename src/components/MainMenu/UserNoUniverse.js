import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavbarText } from 'reactstrap';

export const NoUserMenu = (
  <>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <Link to='/'>
              <h3>Select Universe</h3>
            </Link>
          </NavItem>
        </Nav>
        <hr />
        <Nav className='mr-auto' navbar>
          <NavItem>
            <Link to='https://github.com/reactstrap/reactstrap'>
              <h3>Tellit</h3>
            </Link>
          </NavItem>
          <NavItem>
            <Link to='https://github.com/reactstrap/reactstrap'>
              <h3>Log out</h3>
            </Link>
          </NavItem>
        </Nav>
        <hr />
        <NavbarText>
          <p>Danny Wilkins &copy;</p>
        </NavbarText>
      </>
);

export default NoUserMenu;