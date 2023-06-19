import Initial from "./Initial.jsx"
import Quiz from "./Quiz.jsx";
import { useState, useEffect } from "react"
import {decode} from 'html-entities';
import { nanoid } from 'nanoid'

function App() {

  const [ quizStarted, setQuizStarted ] = useState(false)

  const [ quizArr, setQuizArr ] = useState([])
  
  useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
      .then(res => res.json()) 
      .then(data => {
        const tempQuizArr = []
        data["results"].forEach(result => {
          const question = decode(result["question"])
          const correctAnswer = decode(result["correct_answer"])
          const incorrectAnswers = result["incorrect_answers"].map(incorranswer => decode(incorranswer))
          const allAnswers = [ ...incorrectAnswers ]
          allAnswers.splice(Math.floor(Math.random() * allAnswers.length), 0, correctAnswer)
          tempQuizArr.push({
            id:nanoid(),
            question: question,
            correctAnswer: correctAnswer,
            incorrectAnswers: incorrectAnswers,
            allAnswers: allAnswers
          })

          setQuizArr(tempQuizArr)
        })
      })
  }, [quizStarted])

  return (
    <>
      {!quizStarted && <Initial setQuizStarted={setQuizStarted}/>}
      {quizStarted && <Quiz quizArr={quizArr}/>}
    </>
  )
}

export default App
