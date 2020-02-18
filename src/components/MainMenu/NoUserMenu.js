import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavbarText } from 'reactstrap';

export const NoUserMenu = (
  <>
    <Nav className='mr-auto' navbar>
      <NavItem>
        <Link to='/about'>
          <h3>Tellit</h3>
        </Link>
      </NavItem>
      <NavItem>
        <Link to='/login'>
          <h3>Log in</h3>
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
