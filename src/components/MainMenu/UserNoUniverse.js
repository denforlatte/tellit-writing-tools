import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavbarText } from 'reactstrap';

export const NoUserMenu = ({ toggleMenu, logout }) => (
  <>
    <Nav className='mr-auto' navbar>
      <NavItem>
        <Link to='/' onClick={toggleMenu}>
          <h3>Select Universe</h3>
        </Link>
      </NavItem>
    </Nav>
    <hr />
    <Nav className='mr-auto' navbar>
      <NavItem>
        <Link to='/about' onClick={toggleMenu}>
          <h3>Tellit</h3>
        </Link>
      </NavItem>
      <NavItem>
        <Link to='/login' onClick={logout}>
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

NoUserMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

export default NoUserMenu;
