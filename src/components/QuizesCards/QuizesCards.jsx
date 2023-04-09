import React, { useEffect, useState } from 'react';
// mdb bootsrtap
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
//styles
import styles from './style.module.css'
import { Link } from 'react-router-dom';

function QuizesCards() {
  const [quizes, setQuizes] = useState();

  useEffect(() => {
    fetch('quizes.json')
      .then((resp) => resp.json())
      .then((data) => setQuizes(data));
  }, []);


  return (
    <div className="row w-100">
      <div className="col-md-12 d-flex justify-content-center flex-column gap-4">
        <h1 className="text-center">Choose A Quiz</h1>
        <div className="d-flex flex-wrap gap-4 justify-content-center">
          {quizes
            ? Object.keys(quizes)?.map((key, index) => {
                return (
                  <MDBCard id={styles.topicCard} key={index} className="w-25 bg-dark">
                    <MDBCardImage
                    height={'210px'}
                      src={`images/${key}.jpg`}
                      position="top"
                      alt="..."/>
                    <MDBCardBody>
                      <MDBCardTitle className="fs-3 fw-6 text-light">
                       Topic: {key}
                      </MDBCardTitle>
                        <Link className={styles.singleButtonText} to={`/single/${key}`}>
                            <MDBBtn className="btn btn-danger text-dark fw-bold">
                                Give it a try
                            </MDBBtn>
                          </Link>
                    </MDBCardBody>
                  </MDBCard>
                );
              })
            : ''}
        </div>
      </div>
    </div>
  );
}

export default QuizesCards;
