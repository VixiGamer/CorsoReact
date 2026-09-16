import { useState } from "react"
import Header from "./components/Header.jsx"
import UserInput from "./components/UserInputs.jsx"
import Results from "./components/Results.jsx"

function App() {
  //^ Abbiamo spostato un piano sopra 'userInput', 'setUserInput' e 'handleChange', perché cosi lo posso mandare gli inputs
  //^ anche a 'Results'. Perché se lo lasciavo in 'Inputs', allora non lo potevo mandare a 'Results',
  //^ e rendeva la cose molto piu complicate.
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration >= 1

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: Number(newValue)
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
