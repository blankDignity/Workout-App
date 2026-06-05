import {WeeklyActivityBar} from "./weeklyActivityBar.tsx";

const timeSpentWorkingOut = [
  {day: "Mon", duration: 90 },
  {day: "Tue", duration: 110},
  {day: "Wed", duration: 80},
  {day: "Thu", duration: 100},
  {day: "Fri", duration: 95},
  {day: "Sat", duration: 0},
  {day: "Sun", duration: 0},
]


export function WeeklyActivity() {
  return (
      <div className={"w-200.5 bg-[#16161d] border border-[#2a2a31] mt-6 rounded-xl"}>
        <div className={"flex justify-between items-center p-8"}>
          <div className={"font-bold text-2xl flex-100"}>Weekly Activity</div>
          <div className={"text-[#8b8b95] text-sm"}>5 of 7 days completed</div>
        </div>

        <div className={"flex justify-between items-center pl-6 h-65 gap-4"}>
        {timeSpentWorkingOut.map((day) => (
            <WeeklyActivityBar dayBar={day}/>
        ))}
        </div>

      </div>
  );
}