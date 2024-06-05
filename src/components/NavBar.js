import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/"> Patel Shopping Site</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/">Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/cart">Cart</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/account">Account</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
