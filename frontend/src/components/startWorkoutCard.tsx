import type {WorkoutType} from "../types/workout.ts";
import {useState} from "react";
import {Timer} from "./timer.tsx";

interface startWorkoutProps {
    workout: WorkoutType,
    onClose: () => void;
}

export function StartWorkoutCard({workout, onClose}: startWorkoutProps) {
    const [completedExercises, setCompletedExercises] = useState<number>(0);
    return (
        <div className={"fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center rounded-2xl"}>
            <div className={"flex justify-center rounded-2xl flex-col bg-[#16161d] border border-zinc-700 p-6"}>
                <div className={"flex justify-between w-100"}>
                    <div className={"text-[18px] font-bold text-zinc-400"}>Active Workout</div>
                    <button onClick={onClose}>
                        <svg className={"w-6"} viewBox="0 0 24 24" fill="#fff">
                            <path
                                d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
                                fill="#fff"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                                  fill="#fff"/>
                        </svg>
                    </button>
                </div>

                <div className={"text-4xl font-bold py-2"}>
                    {workout.workout_name}
                </div>

                <div className={"flex"}>
                    <div>
                        <Timer/>
                    </div>

                    <div>
                        <div>
                            <div>Progress</div>
                            <div>{completedExercises}/{workout.exercise_names.length} done</div>
                        </div>

                        <div>------------------</div>
                    </div>
                </div>

                <div>
                    <button onClick={() => {
                        setCompletedExercises(completedExercises + 1)
                    }}>Increment
                    </button>
                    map
                </div>

                <div>End Workout</div>

            </div>
        </div>
    )
}
