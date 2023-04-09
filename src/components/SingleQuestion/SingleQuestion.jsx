//css
import styles from './style.module.css'

//react
import { useRef } from 'react';

//navigation
import { useNavigate } from 'react-router';

//redux
import { useDispatch, useSelector } from 'react-redux';

//functions
import { checkUserAnswer, addPoint } from '../../redux/pointsReducer/action';

function SingleQuestion({ question, moveToNextQuestion }) {
  const answersInputs = useRef([]);
  const currentUserAnswer = useRef('');
  const dispatch = useDispatch();
  const { points } = useSelector((state) => state);
  const navigate = useNavigate();

  console.log(points);

  //   TODO: dispatch
  //   TODO: handle next button on the_questions number
  //   TODO: the number of question 9 out of 10

  function handleNext() {
    //check if user didn't check any answer
    answersInputs.current.map((input) => {
      if (input?.checked === true) {
        moveToNextQuestion();
        input.checked = false;
      }
    });

    dispatch(checkUserAnswer());

    if (currentUserAnswer.current === question.answer) {
      dispatch(addPoint());
    }
  }

  function storeUserAnswer(userAnswer) {
    currentUserAnswer.current = userAnswer;
  }

  return (
    <div className={styles.container}>
      {question ? (
        <div>
          <p className='text-danger fw-bold fs-5'>{question?.question}</p>
          {question?.options.map((option, index) => {
            return (
              <div>
                <input onClick={() => storeUserAnswer(option)}
                  ref={(el) => (answersInputs.current[index] = el)} name="input" type={'radio'}/>
                <label className='text-light ms-3'>{option}</label>
              </div>
            );
          })}

         <button className='btn btn-light mt-4' onClick={handleNext}>Next</button>
        </div>
      ) : (
        <div className='d-flex justify-content-center flex-wrap h-100 p-5 w-100'>
          <h2 className='mb-5 text-danger'>Your Score is : {points}/10</h2> 
          <div className='d-flex justify-content-center w-100'>
            <button className='btn btn-light' onClick={() => navigate('/')}>Back Home</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleQuestion;
