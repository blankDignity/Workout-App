import * as React from "react";
import type {Exercise} from "../types/workout.ts";

type Exercise_with_id = Exercise & {
  id: number;
}

interface props {
  id: number,
  setExercises: React.Dispatch<React.SetStateAction<Exercise_with_id[]>>
}

export function Delete_button({id, setExercises}: props) {
  async function handleDelete() {
    try {
      const response = await fetch(`http://localhost:3000/api/workouts/${id}`, {
        method: "DELETE",
      })

      setExercises(prev => prev.filter(w => w.id != id));
      if (!response.ok) {
        console.log(`Failed to delete`);
        console.log(`Response status: ${response.status}`);
      }
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }

  return (
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
  );
}