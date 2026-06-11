import {Workout_list} from '../components/workout_list.tsx'
import {Form} from '../components/form.tsx'
import type {WorkoutType} from '../types/workout.ts';
import {useState} from "react";


type Workout_with_id = WorkoutType & {
  id: number;
}


export default function AddWorkout() {
  const [Workouts, setWorkouts] = useState<Workout_with_id[]>([{
    id: 0, workout_name: "", muscle_group: "", exercise_names: [], date: "", time: "",
  }]);

  return (<>
    <div className={"ml-110 w-full flex flex-col"}>
      <div className={"mt-10"}>
        <div className={"font-bold text-5xl py-3"}>Add Workout</div>
        <div className={"text-xl text-zinc-400"}>Create a new workout routine</div>
      </div>

      <Form setWorkouts={setWorkouts}/>
      <Workout_list Workouts={Workouts} setWorkouts={setWorkouts}/>
    </div>
  </>)
}
