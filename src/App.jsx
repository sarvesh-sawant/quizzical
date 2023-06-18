import Initial from "./Initial.jsx"
import { useState } from "react"
function App() {

  const [ quizStarted, setQuizStarted ] = useState(false)

  return (
    <>
      {!quizStarted && <Initial setQuizStarted={setQuizStarted}/>}
      
    </>
  )
}

export default App
