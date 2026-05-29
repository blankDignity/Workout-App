import {Workout_list} from '../components/workout_list.tsx'
import {Timer} from '../components/timer.tsx'
import {Form} from '../components/form.tsx'
import type {Workout} from '../types/workout.ts';
import {useState} from "react";


type Workout_with_id = Workout & {
  id: number;
}


function AddWorkout() {
  const [Workouts, setWorkouts] = useState<Workout_with_id[]>([]);

  return (<>
    <div id={"body"}>
      <Form setWorkouts={setWorkouts}/>
      <Workout_list Workouts={Workouts} setWorkouts={setWorkouts}/>
      <Timer/>
    </div>
  </>)
}

export default AddWorkout;