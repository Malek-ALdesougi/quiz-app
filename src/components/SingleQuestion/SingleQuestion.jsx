import { useRef } from 'react';

function SingleQuestion({ question, moveToNextQuestion }) {

  const answersInputs = useRef([]);
  const currentUserAnswer = useRef('');


  function handleNext() {
    answersInputs.current.map((input) => {
      if (input.checked === true) {
        moveToNextQuestion();
        input.checked = false;
      }
    });

    if(currentUserAnswer.current === question.answer){
        // HERE WE CAN FINALLY DO THE DISPATCH FOR INCREASE THE FIANL POINTS OR NOT IN THE REDUX
    }
  }

  function storeUserAnswer(userAnswer){
    currentUserAnswer.current = userAnswer;
  }

  return (
    <div>
      <p>{question.question}</p>
      {question.options.map((option, index) => {
        return (
          <>
            <input onClick={() => storeUserAnswer(option)} value={'malek'} ref={(el) => (answersInputs.current[index] = el)} name="input" type={'radio'}/>
            <label>{option}</label>
          </>
        );
      })}
      <button onClick={handleNext}>Next</button>
      {/* tairnary operato */}
      <button>Submit</button>
    </div>
  );
}

export default SingleQuestion;
