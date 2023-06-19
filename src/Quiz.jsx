/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

const Quiz = ({ quizArr }) => {

    console.log(quizArr)
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
    
    const arr = quizArr.map(quiz => {
        return (
            <div key={quiz["id"]} className="quiz-container">
                <h3 className="quiz-container-question">{quiz['question']}</h3>
                <div className="quiz-container-ans-options">    
                    <input type="radio" name={`answers-${quiz["id"]}`} id={`answers1-${quiz["id"]}`} value={quiz["allAnswers"][0]} checked={answers[`answers-${quiz["id"]}`]===quiz["allAnswers"][0]} onChange={handleAnswerChange}/><label className="quiz-container-answer-btn" htmlFor={`answers1-${quiz["id"]}`}><span>{quiz["allAnswers"][0]}</span></label>
                    <input type="radio" name={`answers-${quiz["id"]}`} id={`answers2-${quiz["id"]}`} value={quiz["allAnswers"][1]} checked={answers[`answers-${quiz["id"]}`]===quiz["allAnswers"][1]} onChange={handleAnswerChange}/><label className="quiz-container-answer-btn" htmlFor={`answers2-${quiz["id"]}`}><span>{quiz["allAnswers"][1]}</span></label>
                    <input type="radio" name={`answers-${quiz["id"]}`} id={`answers3-${quiz["id"]}`} value={quiz["allAnswers"][2]} checked={answers[`answers-${quiz["id"]}`]===quiz["allAnswers"][2]} onChange={handleAnswerChange}/><label className="quiz-container-answer-btn" htmlFor={`answers3-${quiz["id"]}`}><span>{quiz["allAnswers"][2]}</span></label>
                    <input type="radio" name={`answers-${quiz["id"]}`} id={`answers4-${quiz["id"]}`} value={quiz["allAnswers"][3]} checked={answers[`answers-${quiz["id"]}`]===quiz["allAnswers"][3]} onChange={handleAnswerChange}/><label className="quiz-container-answer-btn" htmlFor={`answers4-${quiz["id"]}`}><span>{quiz["allAnswers"][3]}</span></label>
                </div>
            </div> 
        )
    })

    return (
        <div className="quiz-questions-container">
            {arr}
            <button className="check-answer-btn">Check answers</button>
        </div>
    )
}

export default Quiz