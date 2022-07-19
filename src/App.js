import React from 'react';
import logo from './logo.svg';
import './App.css';
import Confetti from "react-confetti";

function App() {
  const [animationDone,setAnimationDone] = React.useState(true);
  const startAnimation = () =>{
    setAnimationDone(true);
  }
  const stopAnimation = () =>{
      setAnimationDone(false);
  }
  return (
    <div className="App">
      <button onClick={() => startAnimation()}>Start</button>
      <button onClick={() => stopAnimation()}>Stop</button>
      {
        animationDone?(

          <Confetti
                  gravity={.1}
                  run={animationDone}
                  numberOfPieces={300}
                />
        ):(
          <Confetti
                  gravity={.1}
                  run={!animationDone}
                  numberOfPieces={0}
                />
        )
      }
    </div>
  );
}

export default App;
