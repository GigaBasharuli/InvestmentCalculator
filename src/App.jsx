import UserInput from "./components/userInput";
import Results from "./components/Results";
import { useState, useEffect } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const initialValues = {
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  };

  const [values, setValues] = useState(initialValues);
  const [investmentResults, setInvestmentResults] = useState(null);
  function onChangeHandler(event) {
    const { name, value } = event.target;
    setValues((current) => ({
      ...current,
      [name]: Number(value),
    }));
  }
  const inputIsValid = values.duration >= 1;

  useEffect(() => {
    const results = calculateInvestmentResults(values);
    setInvestmentResults(results);
    console.log(investmentResults);
  }, [values]);

  return (
    <>
      <UserInput funct={onChangeHandler} values={values} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater then zero</p>
      )}
      {inputIsValid && <Results results={investmentResults} />}
    </>
  );
}

export default App;
