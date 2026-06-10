import type {ExerciseType} from "./exercise.ts";

export type WorkoutType = {
  workout_name: string,
  muscle_group: string,
  exercise_names: ExerciseType[],
  date: string,
  time: string,
}