import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
} from 'reactstrap';
import './mainMenu.scss';
import NoUserMenu from './NoUserMenu';
import UserNoUniverse from './UserNoUniverse';
import FullMenu from './FullMenu';

const MainMenu = ({user, universe}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuContent = () => {
    if(user && universe) {
      return FullMenu;
    } else if (user && !universe) {
      return UserNoUniverse;
    } else {
      return NoUserMenu;
    }
  };

  return (
    <Navbar color='primary' light>
      <NavbarToggler onClick={toggle} />
      <Link to='/'>
        <h1>Tellit</h1>
      </Link>
      <Button>Edit</Button>
      <Collapse isOpen={isOpen} navbar>
        {menuContent()}
      </Collapse>
    </Navbar>
  );
};

MainMenu.propTypes = {
  user: PropTypes.bool.isRequired,
  universe: PropTypes.object,
}

const mapStateToProps = state => ({
  user: state.user.isAuthenticated,
  universe: state.universes.universe,
})

export default connect(mapStateToProps)(MainMenu);
