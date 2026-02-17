import {Workout_list} from './components/workout_list.tsx'
import {Timer} from './components/timer.tsx'
import {Nav_bar} from './components/nav_bar.tsx'
import {Form} from './components/form.tsx'
import {useState} from "react";
import type {Workout} from "./types/workout.ts";

type Workout_with_id = Workout & {
  id: number;
}

function App() {
  const [Workouts, setWorkouts] = useState<Workout_with_id[]>([]);

  return (
      <>
        <Nav_bar/>
        <Form setWorkouts={setWorkouts}/>
        <Workout_list Workouts={Workouts} setWorkouts={setWorkouts}/>
        <Timer/>
      </>
  )
}

export default App