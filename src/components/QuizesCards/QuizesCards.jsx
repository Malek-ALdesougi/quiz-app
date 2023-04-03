// mdb bootsrtap
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function QuizesCards() {
    
    return ( <div className='row'>
        <div className='col-md-12 p-5'>
        <MDBCard className='w-25'>
         <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
         <MDBCardBody>
           <MDBCardTitle>Card title</MDBCardTitle>
           {/* <MDBCardText>
             Some quick example text to build on the card title and make up the bulk of the card's content.
           </MDBCardText> */}
           <MDBBtn href='#'>Button</MDBBtn>
         </MDBCardBody>
    </MDBCard>
    </div>
    </div> );
}

export default QuizesCards;