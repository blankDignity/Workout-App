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
    workout_name: "", muscle_group: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // sets value as the changed form elements value which will later be sent to the db
    const {name, value} = e.currentTarget;

    setForm((prev: Workout) => ({
      ...prev, [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.workout_name) {
      return;
    }

    const response = await fetch("http://localhost:3000/api/workout_list", {
      method: "POST", headers: {
        "Content-type": "application/json",
      }, body: JSON.stringify(form),
    });

    const data: Workout_with_id = await response.json();
    console.log(`Stored: ${data}`);

    setWorkouts(prev => [...prev, data]);

    setForm({
      workout_name: "", muscle_group: "",
    })
  }

  return (<>
    <span className="form flex justify-center pt-25">
      <form
          className={"[&>input]:text-zinc-800 [&>input]:px-1 [&>pre]:text-black [&>pre]:text-[18px] bg-white border rounded-md p-10 border-violet-300 shadow-xl/50 shadow-emerald-700"}
          onSubmit={handleSubmit}
          id={"workout_adding_form"}>

        <span className={"text-black table mx-auto pb-15 font-bold text-2xl"}>ADD WORKOUT</span>
        <pre className={""}>Workout Name</pre>
        <input className={"border rounded border-zinc-400 w-68 mb-8"} name={"workout_name"} value={form.workout_name}
               onChange={handleChange}/><br/>

        <pre>Muscle Group</pre>
        <input className={"my-1 border rounded border-zinc-400 w-68 mb-8"} name={"muscle_group"}
               value={form.muscle_group}
               onChange={handleChange}/><br/><br/>
        <div className={"flex justify-center"}>
          <button type={"submit"} className={"saveBtn bg-[#89F336] rounded px-2 text-zinc-800"}>Save</button>
        </div>
      </form>
    </span>
  </>);
}