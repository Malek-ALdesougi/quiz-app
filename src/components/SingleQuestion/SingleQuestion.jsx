//css
import styles from './style.module.css'

//react
import { useRef, useState } from 'react';

//navigation
import { useNavigate, useParams } from 'react-router';

//redux
import { useDispatch, useSelector } from 'react-redux';

//functions
import { checkUserAnswer, addPoint, removePoint, resetPoints } from '../../redux/pointsReducer/action';


function SingleQuestion({ question, prev, next }) {

  const answersInputs = useRef([]);
  const currentUserAnswer = useRef('');
  const questionNo = useRef(0);
  const dispatch = useDispatch();
  const { points } = useSelector((state) => state);
  const navigate = useNavigate();
  const {quiz} = useParams('quiz');
  // const userAnswers = useRef([]);

  //flag to remove point if the previous answer was correct
  const [checkPrev, setCheckPrev] = useState(false);


  // TODO: switch the fetch data to the redux and create new reducer for it 
  // TODO: handle previw correct answers or preview users answers and the correct

  function handleNext() {
    //check if user didn't check any answer
    answersInputs.current.map((input) => {
      if (input?.checked === true) {
        next();
        input.checked = false;
        questionNo.current ++;
      }
    });

    dispatch(checkUserAnswer());

    if (currentUserAnswer.current === question.answer) {
      setCheckPrev(true);
      dispatch(addPoint());
    }
  }

  function handlePrev(){
    prev();
    questionNo.current --;
    if(checkPrev){
      dispatch(removePoint());
      setCheckPrev(false)
    }
  }

  function storeUserAnswer(userAnswer) {
    currentUserAnswer.current = userAnswer;
  }

  function handleBackHome(){
    dispatch(resetPoints());
    navigate('/');
  }

  return (
    <div className={styles.container}>
      {question ? (
        <div className='w-100'>
          <p className='text-warning'>Question {questionNo.current} / 10</p>
          <hr />
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

        <div className='d-flex justify-content-center w-100 gap-5'>
         {questionNo.current !== 0 ? <button className='btn btn-light mt-4' onClick={handlePrev}>Previous</button> : ''}
         <button className='btn btn-light mt-4' onClick={handleNext}>Next</button>
        </div>
        </div>
      ) : (
        <div className='d-flex justify-content-center flex-wrap h-100 p-5 w-100'>
          <h2 className='mb-5 text-danger'>Your Score is : {points}/10</h2> 
          <div className='d-flex gap-3 justify-content-center w-100'>
            <button className='btn btn-light' onClick={handleBackHome}>Back Home</button>
            <button className='btn btn-light' onClick={() => navigate(`/preview/${quiz}`)}>Preview Answers</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleQuestion;
