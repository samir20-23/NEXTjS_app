"use client";

import { useState } from 'react';

export default function HomePage() {
  const [targetNumber, setTargetNumber] = useState<number>(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);

  const handleGuess = () => {
    const guessNumber = Number(guess);
    setAttempts(attempts + 1);

    if (guessNumber === targetNumber) {
      setMessage(`🎉 Congratulations! You guessed the number ${targetNumber} in ${attempts + 1} attempts.`);
    } else if (guessNumber < targetNumber) {
      setMessage('📉 Too low! Try again.');
    } else {
      setMessage('📈 Too high! Try again.');
    }

    setGuess('');
  };

  const handleReset = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setAttempts(0);
    setMessage('');
    setGuess('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Number Guessing Game</h1>
      <p style={styles.instructions}>Guess a number between 1 and 100!</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
        style={styles.input}
      />
      <div style={styles.buttonContainer}>
        <button onClick={handleGuess} style={styles.button}>Guess</button>
        <button onClick={handleReset} style={{ ...styles.button, backgroundColor: '#e74c3c' }}>Reset Game</button>
      </div>
      <h2 style={styles.message}>{message}</h2>
      <p style={styles.attempts}>Attempts: {attempts}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  title: {
    color: '#2c3e50',
  },
  instructions: {
    color: '#34495e',
  },
  input: {
    padding: '10px',
    width: '100%',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #bdc3c7',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  message: {
    color: '#e67e22',
  },
  attempts: {
    color: '#7f8c8d',
  },
};
