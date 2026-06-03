import type {TimeSpentWorkingOut} from "../types/timeSpentWorkingOut.ts";

type dayBarProps = {
  dayBar: TimeSpentWorkingOut
}

export function WeeklyActivityBar({dayBar}: dayBarProps) {
  return (
      <div className={"flex flex-col h-full justify-end"}>

        <div style={{height: `${dayBar.duration}px`}}
             className={`bg-red-400 rounded-xl`}></div>
        <div>{dayBar.day}</div>
      </div>
  )
}