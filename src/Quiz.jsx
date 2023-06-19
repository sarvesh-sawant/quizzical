/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

const Quiz = ({ quizArr, handleSetQuizStarted }) => {

    const [ answers, setAnswers ] = useState({
        [`answers-${quizArr[0]["id"]}`]: quizArr[0]["allAnswers"][3],
        [`answers-${quizArr[1]["id"]}`]: quizArr[1]["allAnswers"][3],
        [`answers-${quizArr[2]["id"]}`]: quizArr[2]["allAnswers"][3],
        [`answers-${quizArr[3]["id"]}`]: quizArr[3]["allAnswers"][3],
        [`answers-${quizArr[4]["id"]}`]: quizArr[4]["allAnswers"][3],
    })

    useEffect(
        () => {
            setAnswers({
                [`answers-${quizArr[0]["id"]}`]: quizArr[0]["allAnswers"][3],
                [`answers-${quizArr[1]["id"]}`]: quizArr[1]["allAnswers"][3],
                [`answers-${quizArr[2]["id"]}`]: quizArr[2]["allAnswers"][3],
                [`answers-${quizArr[3]["id"]}`]: quizArr[3]["allAnswers"][3],
                [`answers-${quizArr[4]["id"]}`]: quizArr[4]["allAnswers"][3],  
            })
        },
        [quizArr]
    )
    
    const handleAnswerChange = (event) => {
        const {value, name} = event.target
        setAnswers(oldAnswersState => {
            return ({
                ...oldAnswersState,
                [name] : value
            })
        })
    }

    const [ checkAnswer, setCheckAnswer ] = useState(false)

    let correctAnswerCount = 5

    function correctAnswer(quiz, answerValue){
        if(!checkAnswer){ //If check button is clicked then continue
            if(answers[`answers-${quiz["id"]}`]===answerValue){
                return "selected-btn"
            }
            return ""
        }
        if(answerValue!==quiz["correctAnswer"] && (answers[`answers-${quiz["id"]}`]===answerValue)){
            correctAnswerCount-=1
            return "incorrect-answer"
        }
        if(answerValue===quiz["correctAnswer"]){
            return "correct-answer"
        }
        return "not-selected"
    }

    
    
    const arr = quizArr.map(quiz => {

        return (
            <div key={quiz["id"]} className="quiz-container">
                <h3 className="quiz-container-question">{quiz['question']}</h3>
                <div className="quiz-container-ans-options">    
                    <input 
                        type="radio" 
                        name={`answers-${quiz["id"]}`} 
                        id={`answers1-${quiz["id"]}`} 
                        value={quiz["allAnswers"][0]} 
                        checked={answers[`answers-${quiz["id"]}`]===quiz["allAnswers"][0]} 
                        onChange={handleAnswerChange}
                        disabled={checkAnswer?true:false}
                    />
                    <label 
                        className={`quiz-container-answer-btn ${correctAnswer(quiz,quiz["allAnswers"][0])}`} 
                        htmlFor={`answers1-${quiz["id"]}`}
                    >
                        <span>{quiz["allAnswers"][0]}</span>
                    </label>
                    <input 
                        type="radio" 
                        name={`answers-${quiz["id"]}`} 
                        id={`answers2-${quiz["id"]}`} 
                        value={quiz["allAnswers"][1]} 
                        checked={answers[`answers-${quiz["id"]}`]===quiz["allAnswers"][1]} 
                        onChange={handleAnswerChange}
                        disabled={checkAnswer?true:false}
                    />
                    <label 
                        className={`quiz-container-answer-btn ${correctAnswer(quiz,quiz["allAnswers"][1])}`} 
                        htmlFor={`answers2-${quiz["id"]}`}
                    >
                        <span>{quiz["allAnswers"][1]}</span>
                    </label>
                    <input 
                        type="radio" 
                        name={`answers-${quiz["id"]}`} 
                        id={`answers3-${quiz["id"]}`} 
                        value={quiz["allAnswers"][2]} 
                        checked={answers[`answers-${quiz["id"]}`]===quiz["allAnswers"][2]} 
                        onChange={handleAnswerChange}
                        disabled={checkAnswer?true:false}
                    />
                    <label 
                        className={`quiz-container-answer-btn ${correctAnswer(quiz,quiz["allAnswers"][2])}`}
                        htmlFor={`answers3-${quiz["id"]}`}
                    >        
                        <span>{quiz["allAnswers"][2]}</span>
                    </label>
                    <input 
                        type="radio" 
                        name={`answers-${quiz["id"]}`} 
                        id={`answers4-${quiz["id"]}`} 
                        value={quiz["allAnswers"][3]} 
                        checked={answers[`answers-${quiz["id"]}`]===quiz["allAnswers"][3]} 
                        onChange={handleAnswerChange}
                        disabled={checkAnswer?true:false}
                    />
                    <label 
                        className={`quiz-container-answer-btn ${correctAnswer(quiz,quiz["allAnswers"][3])}`} 
                        htmlFor={`answers4-${quiz["id"]}`}
                    >
                        <span>{quiz["allAnswers"][3]}</span>
                    </label>
                </div>
            </div> 
        )
    })

    return (
        <div className="quiz-questions-container">
            {arr}
            {!checkAnswer ? 
                <button 
                    className="btn-blue check-answer-btn" 
                    onClick={() => setCheckAnswer(true)}>Check answers</button> : 
                    <div className="play-again-container">
                        <h4 className="play-again-container-correct-answers">You scored {correctAnswerCount}/5 correct answers</h4>
                        <button 
                            className="btn-blue play-again-btn" 
                            onClick={handleSetQuizStarted}>
                            Play again
                        </button>
                    </div>}
        </div>
    )
}

export default Quiz