import {WeeklyActivityBar} from "./weeklyActivityBar.tsx";

const timeSpentWorkingOut = [
  {day: "Monday", duration: 90 },
  {day: "Tuesday", duration: 110},
  {day: "Wednesday", duration: 80},
  {day: "Thursday", duration: 100},
  {day: "Friday", duration: 95},
  {day: "Saturday", duration: 0},
  {day: "Sunday", duration: 0},
]


export function WeeklyActivity() {
  return (
      <div className={"w-200.5 bg-[#16161d] border border-[#2a2a31] mt-6 rounded-xl"}>
        <div className={"flex justify-between items-center p-8"}>
          <div className={"font-bold text-2xl flex-100"}>Weekly Activity</div>
          <div className={"text-[#8b8b95] text-sm"}>5 of 7 days completed</div>
        </div>

        <div className={"flex justify-between items-center p-8 h-75"}>
        {timeSpentWorkingOut.map((day) => (
            <WeeklyActivityBar dayBar={day}/>
        ))}
        </div>

      </div>
  );
}