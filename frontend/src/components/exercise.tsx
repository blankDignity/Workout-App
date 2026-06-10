import {useState} from "react";
import {ExerciseCard} from "./exerciseCard.tsx";

export function Exercise() {
  const [exerciseCardCount, setExerciseCardCount] = useState(0);

  function handleAddExerciseClick() {
    setExerciseCardCount(exerciseCardCount => exerciseCardCount + 1);
    console.log(exerciseCardCount);
  }

  return (<div className={"w-4xl border rounded-2xl border-zinc-700 p-6 my-8 bg-[#16161d]"}>
    <div className={"flex items-center justify-between"}>
      <div className={"text-xl font-bold"}>
        Exercises
      </div>
      <div className={"flex items-center gap-2 bg-[#ff4757] rounded-xl px-5 py-2"}>
        <svg className={"w-3"} fill="white" x="0px" y="0px" viewBox="0 0 512 512">
          <g>
            <path
                d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
          </g>
        </svg>
        <button onClick={handleAddExerciseClick} className={"text-white"}>Add Exercise</button>
      </div>
    </div>

    <div className={"w-full h-full mt-8"}>
      {!exerciseCardCount ?
          <center>
            <div className={"text-zinc-400"}>No exercises added yet. Click "Add Exercise" to get started.</div>
          </center> :
          (
              Array.from({ length: exerciseCardCount }).map((_, index) => (
                  <ExerciseCard
                      key={index}
                      exerciseCardCount={exerciseCardCount}
                      setExerciseCardCount={setExerciseCardCount}
                  />
              ))
          )
    }
  </div>
</div>)
}