import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
// css
import styles from './style.module.css';

function SingleQuiz() {
  const { quiz } = useParams();
  const [currentQuiz, setCurrentQuiz] = useState();
  const [currentQuestion, setCurretnQuestion] = useState(0);

  useEffect(() => {
    fetch('../quizes.json')
      .then((resp) => resp.json())
      .then((quizzz) => setCurrentQuiz(quizzz[quiz]));
  }, [quiz]);

  if (currentQuiz) {
    console.log(currentQuiz);
  }

  return (
    <div className={styles.container}>
      <div className={styles.questionContainer}>
        {currentQuiz ? (
          <SingleQuestion question={currentQuiz[currentQuestion]} />
        ) : (
          ''
        )}
        <button>Next</button>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default SingleQuiz;
