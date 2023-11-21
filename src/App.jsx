import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput'
import Results from './components/Results';


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12
  })

  const inputIsValid = userInput.duration > 0;

  function changeHandler(inputIdetifier, newValue) {
    setUserInput(preValues => {
      return {
        ...preValues,
        [inputIdetifier]: +newValue
      }
    })
  }
  return (<>
    <Header />
    <UserInput userInput={userInput} onChange={changeHandler} />
    {inputIsValid ? <Results userInput={userInput} /> : <p className='center'>Please enter Duration is greater than 0</p>}

  </>

  )
}

export default App
