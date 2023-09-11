import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [timerStatus, setTimerStat] = useState(false);

  function handleTimer() {
    setTimerStat(true);
  }
  function handlePause() {
    setTimerStat(false);
  }
  function handleRestart() {
    setTimer(0);
    setTimerStat(true);
  }

  useEffect(() => {
    let interval;
    if (timerStatus) {
      interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerStatus, timer]);

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>{timer}</div>
      <div>
        <button onClick={handleTimer}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}
