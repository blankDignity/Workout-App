import * as React from "react";
import {useEffect} from "react";
import type {Workout} from "../types/workout.ts";
import {Delete_button} from "./delete_button.tsx";

type Workout_with_id = Workout & {
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
      <>
        <div id={"workout_list"}>
          {Workouts?.map((w, index) =>
              <div key={index}>
                <span>{w.workout_name}: </span>
                <span>{w.muscle_group}   </span>
                <Delete_button id={w.id} setWorkouts={setWorkouts}/>
              </div>
          )}
        </div>
      </>
  );
}
