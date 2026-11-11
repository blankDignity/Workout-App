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
            if (intervalRef.current != null) clearInterval(intervalRef.current);

            return () => {
                if (intervalRef.current != null) clearInterval(intervalRef.current);
            }
        }
    }, [state]);

    function handle_start_stop() {
        setState(state == "Play" ? "Pause" : "Play");
    }

    function handle_reset() {
        setSeconds(0);
        setState("Play");
    }

    function formatTime(seconds: number): string {
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return [
            minutes.toString().padStart(2, "0"),
            secs.toString().padStart(2, "0"),
        ].join(":");
    }

    return (
        <div className="flex gap-6 items-center bg-[#0a0a0f] p-4 rounded-2xl">
            <button onClick={handle_reset}>
                <svg className={"w-8"} viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
                        stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 2H15" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M15.24 10.76L12 14" stroke="#000" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </button>

            <div className={"w-10 font-bold text-2xl"} id={"timer"}>{formatTime(seconds)}</div>

            <button className={"w-8 px-1"} onClick={handle_start_stop}>{state === "Play" ?
                <svg viewBox="0 0 24 24" fill="none">
                    <path
                        d="M20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L7.59662 21.6145C5.53435 22.736 3 21.2763 3 18.9671L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258Z"
                        stroke="#fff" stroke-width="1.5"/>
                </svg> : <svg viewBox="0 0 24 24" fill="none">
                    <path
                        d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                        stroke="#fff" stroke-width="1.5"/>
                    <path
                        d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                        stroke="#fff" stroke-width="1.5"/>
                </svg>}
            </button>
    </div>)
}