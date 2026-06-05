import type {ExerciseType} from "../types/workout.ts";
import {Exercise} from "./exercise.tsx"
import * as React from "react";
import {useState} from "react";
import {Schedule} from "../assets/schedule.tsx";


type Exercise_with_id = ExerciseType & {
  id: number;
}

interface props {
  setExercises: React.Dispatch<React.SetStateAction<Exercise_with_id[]>>,
}

export function Form({setExercises}: props) {
  const [form, setForm] = useState<ExerciseType>({
    workout_name: "", muscle_group: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // sets value as the changed form elements value which will later be sent to the db
    const {name, value} = e.currentTarget;

    setForm((prev: ExerciseType) => ({
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

    const data: Exercise_with_id = await response.json();
    console.log(`Stored: ${data}`);

    setExercises(prev => [...prev, data]);

    setForm({
      workout_name: "", muscle_group: "",
    })
  }

  return (<>
    <div>
      <form onSubmit={handleSubmit}>

        <div className="bg-[#16161d] w-4xl rounded-2xl border border-zinc-700 p-6 mt-10">
          <div className={"font-medium text-[#8b8b95]"}>Exercise Name</div>
          <input className={"p-4 mt-2 text-white w-full bg-[#1e1e26] rounded-xl h-12 border border-zinc-700"}
                 name={"workout_name"}
                 placeholder={"E.g. Chest & Triceps Blast"} value={form.workout_name} onChange={handleChange}/>
        </div>

        <div className={"bg-[#16161d] w-4xl rounded-2xl border border-zinc-700 p-6 my-8"}>
          <div className={"font-medium text-[#8b8b95]"}>Muscle Group</div>
          <input className={"p-4 mt-2 text-white w-full bg-[#1e1e26] rounded-xl h-12 border border-zinc-700"}
                 name={"muscle_group"} placeholder={"e.g. Chest, Triceps"} value={form.muscle_group}
                 onChange={handleChange}/>
        </div>

        <Exercise/>
        <Schedule/>
        <button type={"submit"} className={"w-4xl text-white bg-linear-to-br from-[#ff4757] to-[#ff6b81] rounded-2xl cursor-pointer py-4 text-[18px] font-bold"}>Create Workout</button>
      </form>
    </div>
  </>)
      ;
}