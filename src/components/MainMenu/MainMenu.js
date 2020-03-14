import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Collapse, Navbar, NavbarToggler } from 'reactstrap';
import './mainMenu.scss';

import NoUserMenu from './NoUserMenu';
import UserNoUniverse from './UserNoUniverse';
import FullMenu from './FullMenu';

import {
  enableEditing,
  disableEditing,
} from '../../actions/appManagementActions';
import { logout } from '../../actions/userActions';

const MainMenu = ({
  editable,
  user,
  universe,
  isEditing,
  logout,
  enableEditing,
  disableEditing,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleEdit = () => {
    if (!isEditing) {
      enableEditing();
    } else {
      disableEditing();
    }
    toggleMenu();
  };

  const handleLogout = () => {
    toggleMenu();
    logout();
  };

  let menuContent;
  if (user && universe) {
    menuContent = (
      <FullMenu
        toggleMenu={toggleMenu}
        logout={handleLogout}
        universe={universe}
      />
    );
  } else if (user && !universe) {
    menuContent = <UserNoUniverse toggleMenu={toggleMenu} logout={logout} />;
  } else {
    menuContent = <NoUserMenu toggleMenu={toggleMenu} />;
  }

  return (
    <>
      <Navbar color='primary' light fixed={'top'}>
        <NavbarToggler onClick={toggleMenu} />
        <Link to='/' onClick={toggleMenu}>
          <h1>Tellit</h1>
        </Link>
        {editable ? <Button onClick={toggleEdit}>Edit</Button> : <div style={{width: '70px'}}></div>}
        <Collapse isOpen={isOpen} navbar>
          <hr />
          {menuContent}
        </Collapse>
      </Navbar>
      <div style={{ height: '80px', width: '100%' }} />
    </>
  );
};

MainMenu.propTypes = {
  editable: PropTypes.bool,
  user: PropTypes.bool.isRequired,
  universe: PropTypes.object,
  isEditing: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  enableEditing: PropTypes.func.isRequired,
  disableEditing: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user.isAuthenticated,
  universe: state.universes.universe,
  isEditing: state.appManagement.isEditing,
});

export default connect(mapStateToProps, {
  logout,
  enableEditing,
  disableEditing,
})(MainMenu);
