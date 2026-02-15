import {useEffect, useState} from "react";
import type {Workout} from "../types/workout.ts";
import {Delete_button} from "./delete_button.tsx";

export function Workout_list() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:3000/api/workouts");

        if (!response.ok) {
          console.log(`Response Status: ${response.status}`);
          return;
        }
        const result: Workout[] = await response.json();
        setWorkouts(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  return (
      <>
        <div id={"workout_list"}>
          {workouts && workouts.map((w, index) =>
              <div key={index}>
                <span>{w.workout_name}: </span>
                <span>{w.muscle_group}   </span>
                <Delete_button workout_name={w.workout_name}/>
              </div>
          )}
        </div>
      </>
  );
}
