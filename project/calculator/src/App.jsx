import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);
  const [error, setError] = useState('');


  // Check if both num1 and num2 are non-empty before performing calculations
  const handleCalculation = () => {
    if (num1 === '' || num2 === '') {
      setError('Error!');
    } else {
      setResult(Number(num1) + Number(num2));
      setError('Sucess!');
    }
  };

  useEffect(() => {
    setError('');
  }, [num1, num2])

  return (
    <div className="container">
      <h1>React Calculator</h1>
      {/* Display input boxes */}
      <div className="inputbox">
        <input
          onChange={(e) => setNum1(e.target.value)}
          className="input1"
          type="text"
          placeholder="Num 1"
        />
        <br />
        <input
          onChange={(e) => setNum2(e.target.value)}
          type="text"
          placeholder="Num 2"
          className="input2"
        />
      </div>

      {/* Display operation buttons */}
      <button onClick={handleCalculation}>+</button>
      <button onClick={() => setResult(Number(num1) - Number(num2))}>-</button>
      <button onClick={() => setResult(Number(num1) * Number(num2))}>*</button>
      <button onClick={() => setResult(Number(num1) / Number(num2))}>/</button>

      {/* Display error message */}
      <p style={{ color: 'red' }}> {error}</p>


      {/* Display the result */}
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
