import type {TimeSpentWorkingOut} from "../types/timeSpentWorkingOut.ts";

type dayBarProps = {
  dayBar: TimeSpentWorkingOut
}

export function WeeklyActivityBar({dayBar}: dayBarProps) {
  return (
      <div className={"flex flex-col h-full w-full justify-end"}>

        <div style={{height: `${dayBar.duration * 2}px`}}
             className={`bg-linear-to-t from-[#ff4757] to-[#ff6b81] rounded-xl`}></div>
        <center>
          <div className={"mt-3 pb-2 text-bold text-[#8b8b91]"}>{dayBar.day}</div>
        </center>
      </div>
  )
}