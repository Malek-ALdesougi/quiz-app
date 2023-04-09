import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
//router dom
import { Link } from 'react-router-dom';


function NavBar() {
    return ( 
        <MDBNavbar light bgColor='dark'>
        <MDBContainer>
          <MDBNavbarBrand tag="span" className='mb-0 h1 text-danger fs-3'><Link className='text-danger' to='/'>Quiz App</Link></MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
     );
}

export default NavBar;