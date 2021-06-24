import React from 'react';
import StoreContext from '../../StoreContext';
import Navbar from './Navbar';

const NavbarContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().navbar.friends
          return <Navbar friends={state} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default NavbarContainer;