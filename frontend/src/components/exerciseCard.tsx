import type {ExerciseType} from "../types/exercise.ts";

type ExerciseCardProps = {
  index: number;
  exercise: ExerciseType;
  onRemove: (index: number) => void;
  onChange: (index: number, field: keyof ExerciseType, value: string | number) => void;
};


export function ExerciseCard({index, exercise, onRemove, onChange}: ExerciseCardProps) {
  return (
      <div className={" bg-[#1e1e26] border border-zinc-700 rounded-2xl p-4 mb-4"}>
        <div className={"flex justify-between items-center"}>
          <div className={" text-sm text-zinc-400"}>
            Exercise Name
          </div>
          <div>
            <button type={"button"} onClick={() => onRemove(index)}>
              <svg className={"w-5 hover:bg-amber-950 rounded-4xl"} viewBox="0 0 24 24">
                <path d="M7 17L16.8995 7.10051" stroke="#f00" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 7.00001L16.8995 16.8995" stroke="#f00" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

        </div>

        <input
            className={"w-full mt-2 bg-zinc-950 border border-zinc-700 rounded-xl p-3 text-white outline-none focus:outline-none focus:ring-2 focus:ring-red-500 focus-visible:outline-none"}
            placeholder={"e.g. Bench Press"} value={exercise.name}
            onChange={(e) => onChange(index, "name", e.target.value)}/>

        <div className={"flex justify-between items-center w-full gap-2 mt-3"}>
          <div className={"w-1/2"}>
            <div className={"text-[12px] text-zinc-400"}>Sets</div>
            <input
                type={"number"}
                className={"w-full bg-zinc-950 border border-zinc-700 rounded-xl p-3 text-white outline-none focus:outline-none focus:ring-2 focus:ring-red-500 focus-visible:outline-none"}
                placeholder={"e.g. 4"} value={exercise.sets || ""}
                onChange={(e) => onChange(index, "sets", e.target.value)}/>
          </div>
          <div className={"w-1/2"}>
            <div className={"text-[12px] text-zinc-400"}>Reps</div>
            <input
                type={"number"}
                className={"w-full bg-zinc-950 border border-zinc-700 rounded-xl p-3 text-white outline-none focus:outline-none focus:ring-2 focus:ring-red-500 focus-visible:outline-none"}
                placeholder={"e.g. 8-12"} value={exercise.reps || ""}
                onChange={(e) => onChange(index, "reps", e.target.value)}/>
          </div>
        </div>
      </div>
  )
}