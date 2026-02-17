import * as React from "react";
import type {Workout} from "../types/workout.ts";

type Workout_with_id = Workout & {
  id: number;
}

interface props {
  id: number,
  setWorkouts: React.Dispatch<React.SetStateAction<Workout_with_id[]>>
}

export function Delete_button({id, setWorkouts}: props) {
  async function handleDelete() {
    try {
      const response = await fetch(`http://localhost:3000/api/workouts/${id}`, {
        method: "DELETE",
      })

      setWorkouts(prev => prev.filter(w => w.id != id));
      if (!response.ok) {
        console.log(`Failed to delete`);
        console.log(`Response status: ${response.status}`);
      }
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }

  return (
      <>
        <button onClick={handleDelete}>Delete</button>
      </>
  );
}