import * as React from "react";
import type {WorkoutType} from "../types/workout.ts";

type Exercise_with_id = WorkoutType & {
    id: number;
}

interface props {
    id: number,
    setWorkouts: React.Dispatch<React.SetStateAction<Exercise_with_id[]>>
}

export function Delete_button({id, setWorkouts}: props) {
    async function handleDelete() {
        try {
            const response = await fetch(`http://localhost:3000/api/workouts/${id}`, {
                method: "DELETE",
            })

            setWorkouts(prev => prev.filter(w => w.id != id));
            if (!response.ok) {
                console.log(`Failed to delete`);
                console.log(`Response status: ${response.status}`);
            }
        } catch (err) {
            console.error(`Error: ${err}`);
        }
    }

    return (
        <div>
            <button onClick={handleDelete}>
                <svg viewBox="-0.5 0 19 19">
                    <g id="out" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path
                            d="M4.91666667,14.8888889 C4.91666667,15.3571429 5.60416667,16 6.0625,16 L12.9375,16 C13.3958333,16 14.0833333,15.3571429 14.0833333,14.8888889 L14.0833333,6 L4.91666667,6 L4.91666667,14.8888889 L4.91666667,14.8888889 L4.91666667,14.8888889 Z M15,3.46500003 L12.5555556,3.46500003 L11.3333333,2 L7.66666667,2 L6.44444444,3.46500003 L4,3.46500003 L4,4.93000007 L15,4.93000007 L15,3.46500003 L15,3.46500003 L15,3.46500003 Z"
                            id="path" fill="#fff" className={"hover:fill-red-500"}>
                        </path>
                    </g>
                </svg>
            </button>
        </div>
    );
}
