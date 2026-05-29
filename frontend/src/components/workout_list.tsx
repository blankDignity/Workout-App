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

  function handleSave(): void {

  }

  return (
      <>
        <div id={"workout_list"}>
          <br/>
          <br/>
          {Workouts?.map((w, index) =>
              <div key={index}>
                {/*unique id chainxa label kaam garna*/}
                <input type={"checkbox"} id={"workout" + index}/>
                <label htmlFor={"workout" + index}>{w.workout_name}: </label>
                <span>{w.muscle_group}   </span>
                <Delete_button id={w.id} setWorkouts={setWorkouts}/>
              </div>
          )}
          <br/>
          <div className={"dayDropDown"}>
            <label htmlFor={"day"}>Day: </label>
            <select name={"day"} id={"day"}>
              <option value={"Sunday"}>Sunday</option>
              <option value={"Monday"}>Monday</option>
              <option value={"Tuesday"}>Tuesday</option>
              <option value={"Wednesday"}>Wednesday</option>
              <option value={"Thursday"}>Thursday</option>
              <option value={"Friday"}>Friday</option>
              <option value={"Saturday"}>Saturday</option>
            </select>
          </div>
          <br/>
          <button onClick={handleSave}>Save Workout Plan</button>
          <br/>
          <br/>
        </div>
      </>
  );
}