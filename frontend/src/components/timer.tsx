import {useEffect, useRef, useState} from "react";

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

      return () => {
        if (intervalRef.current != null)
          clearInterval(intervalRef.current);
      }
    }}, [state]);

    function handle_start_stop() {
      setState(state == "Play" ? "Pause" : "Play");
    }

    function handle_reset() {
      setSeconds(0);
      setState("Play");
    }

    return (
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <button onClick={handle_start_stop}>{state}</button>
            <button onClick={handle_reset}>
              <img src={"../../src/assets/reset.svg"} alt="reset" className={"w-5"}/>
            </button>
          </div>
          <div id={"timer"}>{seconds}</div>
        </div>
    )
  }