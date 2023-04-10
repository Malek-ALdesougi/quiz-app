import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
// css
import styles from './style.module.css';


function PreviewAnswers() {
  const [currentQuiz, setCurrentQuiz] = useState();
  const { quiz } = useParams();
  const [questionNumber, setQuestionNumber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('../quizes.json')
      .then((resp) => resp.json())
      .then((quizzz) => setCurrentQuiz(quizzz[quiz]));
  }, [quiz]);


  function handelNextQuestion(){
    setQuestionNumber(questionNumber + 1)
  }
  return (
    <div className={styles.container}>
      <div className={styles.questionContainer}>
        {questionNumber !== 10 && currentQuiz ?
        <>
          <p className='text-danger'>{currentQuiz[questionNumber]?.question}</p>
          {currentQuiz[questionNumber]?.options.map((option) => {
              return (
                <div>
                  <input disabled={true} name="input" type={'radio'}/>
                  <label className={option === currentQuiz[questionNumber].answer ? 'text-success ms-3' : 'text-light ms-3'}>{option}</label>
                </div>
              );
            })}
            <button onClick={handelNextQuestion} className='btn btn-light mt-4'>Next</button>
        </> 
        
         : 
         <div className='d-flex justify-content-center align-items-center gap-3 h-100'>
             <button onClick={() => navigate(-1)} className='btn btn-light'>Re-try</button>
             <button onClick={() => navigate('/')} className='btn btn-light'>Back Home</button>
         </div>
         }
      </div>
    </div>
  );
}

export default PreviewAnswers;
