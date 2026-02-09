type muscle_group = "arms" | "legs" | "chest" | "shoulders" | "forearms" | "back" | "core";

export type Workout = {
  id: number,
  name: string,
  target_muscle_group: muscle_group,
}