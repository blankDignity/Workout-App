import type {WorkoutType} from "../types/workout.ts";
import type {ExerciseType} from "../types/exercise.ts";
import {Exercise} from "./exercise.tsx"
import * as React from "react";
import {useState} from "react";
import {Schedule} from "./schedule.tsx";

type Workout_with_id = WorkoutType & {
  id: number;
}

type workoutsProps = {
  setWorkouts: React.Dispatch<React.SetStateAction<Workout_with_id[]>>,
}

export function Form({setWorkouts}: workoutsProps) {
  const [workout, setWorkout] = useState<Workout_with_id>({
    id: 0,
    workout_name: "",
    muscle_group: "",
    exercise_names: [],
    date: "",
    time: ""
  });

  function handleWorkoutChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.currentTarget;

    setWorkout((prev: Workout_with_id) => ({
      ...prev, [name]: value,
    }));
  }

  const handleExerciseChange = (index: number, field: keyof ExerciseType, value: string | number) => {
    setWorkout((prev) => {
      const updatedExercises = [...prev.exercise_names];
      updatedExercises[index] = {
        ...updatedExercises[index],
        [field]: field === "sets" || field === "reps" ? Number(value) : value,
      };
      return {...prev, exercise_names: updatedExercises};
    });
  };

  const addExercise = () => {
    setWorkout((prev) => ({
      ...prev,
      exercise_names: [...prev.exercise_names, {name: "", sets: 0, reps: 0}],
    }));
  };

  const removeExercise = (index: number) => {
    setWorkout((prev) => ({
      ...prev,
      exercise_names: prev.exercise_names.filter((_, i) => i !== index),
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!workout.workout_name || workout.exercise_names.length === 0) {
      return;
    }

    const response = await fetch("http://localhost:3000/api/workout_list", {
      method: "POST", headers: {
        "Content-type": "application/json",
      }, body: JSON.stringify(workout),
    });

    const data: Workout_with_id = await response.json();
    console.log(`Stored: ${data}`);

    setWorkouts(prev => [...prev, data]);

    setWorkout({
      id: 0, workout_name: "", muscle_group: "", exercise_names: [], date: "", time: ""
    })
  }

  return (<>
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-[#16161d] w-4xl rounded-2xl border border-zinc-700 p-6 mt-10">
          <div className={"font-medium text-[#8b8b95]"}>Workout Name</div>
          <input className={"p-4 mt-2 text-white w-full bg-[#1e1e26] rounded-xl h-12 border border-zinc-700"}
                 name={"workout_name"}
                 placeholder={"E.g. Chest & Triceps Blast"} value={workout.workout_name}
                 onChange={handleWorkoutChange}/>
        </div>

        <div className={"bg-[#16161d] w-4xl rounded-2xl border border-zinc-700 p-6 my-8"}>
          <div className={"font-medium text-[#8b8b95]"}>Muscle Group</div>
          <input className={"p-4 mt-2 text-white w-full bg-[#1e1e26] rounded-xl h-12 border border-zinc-700"}
                 name={"muscle_group"} placeholder={"e.g. Chest, Triceps"} value={workout.muscle_group}
                 onChange={handleWorkoutChange}/>
        </div>

        <Exercise exerciseNames={workout.exercise_names}
                  onAdd={addExercise}
                  onRemove={removeExercise}
                  onChange={handleExerciseChange}/>
        <Schedule date={workout.date} time={workout.time} onChange={handleWorkoutChange}/>

        <button type={"submit"}
                className={"w-4xl text-white bg-linear-to-br from-[#ff4757] to-[#ff6b81] rounded-2xl cursor-pointer py-4 text-[18px] font-bold"}>Create
          Workout
        </button>
      </form>
    </div>
  </>);
}