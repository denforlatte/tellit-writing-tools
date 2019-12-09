import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';
import './mainMenu.scss';

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="primary" light expand="md">
      <Link to="/"><h1>Tellit</h1></Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to='/'><h3>Select Universe</h3></Link>
          </NavItem>
          <NavItem>
            <Link to="https://github.com/reactstrap/reactstrap">
              <h3>Characters</h3>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="https://github.com/reactstrap/reactstrap">
              <h3>Books</h3>
            </Link>
          </NavItem>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default MainMenu;
