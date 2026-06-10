import {Calender} from "../components/calender.tsx";
import {UpcomingSessions} from "../components/upcomingSessions.tsx";
import {ThisWeeksGoal} from "../components/thisWeeksGoal.tsx";

function ExercisePlans() {
  return <div className={"ml-70 my-8"}>
    <div className={"text-5xl font-bold"}>Schedule</div>
    <div className={"text-[#8b8b95] text-[19px] mt-2"}>Plan your training week</div>

    <div className={"flex gap-8"}>
      <div>
        <Calender/>
      </div>
      <div>
        <UpcomingSessions/>
        <ThisWeeksGoal/>
      </div>
    </div>
  </div>
}

export default ExercisePlans;