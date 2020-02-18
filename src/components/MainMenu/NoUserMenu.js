import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavbarText } from 'reactstrap';

export const NoUserMenu = ({toggleMenu}) => (
  <>
    <Nav className='mr-auto' navbar>
      <NavItem>
        <Link to='/about' onClick={toggleMenu}>
          <h3>Tellit</h3>
        </Link>
      </NavItem>
      <NavItem>
        <Link to='/login' onClick={toggleMenu}>
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

NoUserMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
}

export default NoUserMenu;
