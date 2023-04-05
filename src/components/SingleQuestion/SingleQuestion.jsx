function SingleQuestion({question}) {
    console.log(question);
    return ( <>
        <h2>{question.question}</h2>
        <h2>{question.options}</h2>
        <h2>{question.answer}</h2>
    </> );
}

export default SingleQuestion;