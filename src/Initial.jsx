// eslint-disable-next-line react/prop-types
const Initial = ({ setQuizStarted }) => {

    function onStartQuiz(){
        setQuizStarted(true)
    }

    return (
        <div className="intial-page-container">
            <h1 className="intial-page-container-heading">Quizzical</h1>
            <p className="intial-page-container-description">Explore computer science with thought-provoking quizzes</p>
            <button onClick={onStartQuiz} className="intial-page-container-btn">Start Quiz</button>
        </div>
    )
}

export default Initial