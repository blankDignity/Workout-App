import type {Workout} from "../types/workout.ts";
import * as React from "react";
import {useState} from "react";


type Workout_with_id = Workout & {
  id: number;
}

interface props {
  setWorkouts: React.Dispatch<React.SetStateAction<Workout_with_id[]>>,
}

export function Form({setWorkouts}: props) {
  const [form, setForm] = useState<Workout>({
    workout_name: "",
    muscle_group: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // sets value as the changed form elements value which will later be sent to the db
    const {name, value} = e.currentTarget;

    setForm((prev: Workout) => (
        {
          ...prev,
          [name]: value,
        }
    ));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/workout_list", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data: Workout_with_id = await response.json();
    console.log(`Stored: ${data}`);

    setWorkouts(prev => [...prev, data]);

    setForm({
      workout_name: "",
      muscle_group: "",
    })
  }

  return (
      <>
        <div className={"form"}>
          <form onSubmit={handleSubmit} id={"workout_adding_form"}>
            <pre>Enter workout to add: </pre>
            <input name={"workout_name"} value={form.workout_name} placeholder={"E.g:- Push-ups, Squats, etc."}
                   onChange={handleChange}/><br/>

            <pre>Enter muscle group: </pre>
            <input name={"muscle_group"} value={form.muscle_group} placeholder={"E.g:- Arms, Legs, etc."}
                   onChange={handleChange}/><br/><br/>
            <button type={"submit"} className={"saveBtn"}>Save</button>
          </form>
        </div>
      </>
  );
}