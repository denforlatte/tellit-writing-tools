import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavbarText } from 'reactstrap';

export const NoUserMenu = (
  <>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <Link to='/'>
              <h3>Universes</h3>
            </Link>
            <Link to='/'>
              <h3>Characters</h3>
            </Link>
          </NavItem>
        </Nav>
        <hr />
        <Nav className='mr-auto' navbar>
          <NavItem>
            <Link to='/about'>
              <h3>Tellit</h3>
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/'>
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