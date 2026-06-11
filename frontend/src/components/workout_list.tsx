import * as React from "react";
import {useEffect} from "react";
import type {WorkoutType} from "../types/workout.ts";
import {Delete_button} from "./delete_button.tsx";

type Workout_with_id = WorkoutType & {
  id: number;
}

interface props {
  Workouts: Workout_with_id[],
  setWorkouts: React.Dispatch<React.SetStateAction<Workout_with_id[]>>,
}

export function Workout_list({Workouts, setWorkouts}: props) {
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:3000/api/workouts");

        if (!response.ok) {
          console.log(`Response Status: ${response.status}`);
          return;
        }
        const result: Workout_with_id[] = await response.json();
        setWorkouts(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }

    getData().then();
  }, [setWorkouts]);

  return (
      <div className={"mb-8"} id="workout_list">
        {Workouts?.map((w, index) => <div key={index}>
          {/*unique id chainxa label kaam garna*/}
          <input type={"checkbox"} id={"workout" + index}/>
          <label htmlFor={"workout" + index}>{w.workout_name}: </label>
          <span className={"pr-4"}>{w.muscle_group}</span>
          {w.exercise_names?.map((exercise_name, i) => {
            return (<div className={`${i}`}>
              {exercise_name.name}
              {exercise_name.sets}
              {exercise_name.reps}
            </div>)
          })}

          <Delete_button id={w.id} setExercises={setWorkouts}/>
        </div>)}
      </div>
  );
}