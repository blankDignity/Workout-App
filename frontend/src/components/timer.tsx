import {useEffect, useRef, useState} from "react";
import reset from '../assets/reset.png'

export function Timer() {
  const [state, setState] = useState<"Play" | "Pause">("Play");
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (state == "Pause") {
      intervalRef.current = window.setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current != null)
        clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current != null)
        clearInterval(intervalRef.current);
    }
  }, [state]);

  function handle_start_stop() {
    setState(state == "Play" ? "Pause" : "Play");
  }

  function handle_reset() {
    setSeconds(0);
    setState("Play");
  }

  return (
      <>
        <button onClick={handle_start_stop}>{state}</button>
        <button onClick={handle_reset}>
          <img src={reset} alt="reset" height={"30px"} width={"30px"}/>
        </button>
        <div id={"timer"}>{seconds}</div>
      </>
  )
}