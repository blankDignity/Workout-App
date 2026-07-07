import {Form} from '../components/form.tsx'
import type {WorkoutType} from '../types/workout.ts';


type Workout_with_id = WorkoutType & {
  id: number;
}

type setWorkoutsProps = {
  setWorkouts: React.Dispatch<React.SetStateAction<Workout_with_id[]>>;
}

export default function AddWorkout({setWorkouts}: setWorkoutsProps) {
  return (<>
    <div className={"ml-110 w-full flex flex-col"}>
      <div className={"mt-10"}>
        <div className={"font-bold text-5xl py-3"}>Add Workout</div>
        <div className={"text-xl text-zinc-400"}>Create a new workout routine</div>
      </div>

      <Form setWorkouts={setWorkouts}/>
    </div>
  </>)
}
