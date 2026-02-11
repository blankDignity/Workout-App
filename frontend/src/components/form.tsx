import type {Workout} from "../types/workout.ts";
import * as React from "react";
import {useState} from "react";

export function Form() {
  const [form, setForm] = useState<Workout>({
    name: "",
    target_muscle_group: "",
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

    const data = await response.json();
    console.log(`Stored: ${data}`);

    setForm({
      name: "",
      target_muscle_group: "",
    })
  }

  return (
      <>
        <form onSubmit={handleSubmit}>
          <pre>Enter workout to add: </pre>
          <input name={"name"} value={form.name} placeholder={"E.g:- Push-ups, Squats, etc."}
                 onChange={handleChange}/><br/>

          <pre>Enter muscle group: </pre>
          <input name={"target_muscle_group"} value={form.target_muscle_group} placeholder={"E.g:- Arms, Legs, etc."}
                 onChange={handleChange}/><br/><br/>
          <button type={"submit"}>Save</button>
          <br/><br/>
        </form>
      </>
  );
}