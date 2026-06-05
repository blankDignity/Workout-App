import {WorkoutCard} from "./workoutCard.tsx";
import {Link} from "react-router-dom";
import type {UpcomingWorkout} from "../types/upcomingWorkout.ts";

const upcomingWorkouts: UpcomingWorkout[] = [{
  label: "Chest & Triceps Blast", dateAndTime: "Today, 9:00 AM", duration: "45 min"
},
  {
    label: "Leg Day Destroyer", dateAndTime: "Tomorrow, 6:00 PM", duration: "60 min"
  }, {label: "Back & Biceps Power", dateAndTime: "Tomorrow, 9:00 AM", duration: "45 min"}]

export function UpcomingWorkouts() {
  return (<div className="flex flex-col w-200.5 border border-[#2a2a31] rounded-xl bg-[#16161d]">
    <div className={"flex justify-between p-6"}>
      <span className={"font-bold text-2xl flex-100"}>Upcoming Workouts</span>
      <Link to={"/workoutPlans"} className={"text-[#ff4757] group"}>
        <span className={"group-hover:underline"}>View All </span>
        <span className={"no-underline"}>&gt;</span></Link>
    </div>


    {upcomingWorkouts.map((workout: UpcomingWorkout) => (
        <WorkoutCard workout={workout}/>
    ))}
  </div>)
}