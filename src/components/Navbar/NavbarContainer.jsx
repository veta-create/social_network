import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
  return {
    navbar: state.navbar
  }
}

const NavbarContainer = connect(mapStateToProps, null)(Navbar);

export default NavbarContainer;