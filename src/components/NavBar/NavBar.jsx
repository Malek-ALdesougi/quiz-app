import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function NavBar() {
    return ( 
        <MDBNavbar light bgColor='dark'>
        <MDBContainer>
          <MDBNavbarBrand tag="span" className='mb-0 h1 text-danger fs-3'>Quiz App</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
     );
}

export default NavBar;