import {Card} from "../components/card.tsx";
import {UpcomingWorkouts} from "../components/upcomingWorkouts.tsx";
import {WeeklyActivity} from "../components/weeklyActivity.tsx";
import {Streak} from "../components/streak.tsx";
import {RecentActivity} from "../components/recentActivity.tsx";
import {TodaysChallenge} from "../components/todaysChallenge.tsx";

function Home() {

  return (<>
    <div className={"mt-8 ml-68 mb-8"}>
      <div className="mb-3">
      <span
          className={"font-bold pt-2 text-5xl bg-linear-to-r from-[#ff4757] to-[#ff6b81] bg-clip-text text-transparent"}>PUSH YOUR LIMITS</span>
      </div>
      <div className={"text-[#8b8b95]"}>Welcome back, Sakshyam! Ready to dominate today's workout?</div>

      <div className={"cards flex gap-6 mt-8"}>
        <Card icon={"🔥"} numericVal={"12"} text={"Day Streak"}/>
        <Card icon={"📈"} numericVal={"24"} text={"Workouts This Month"}/>
        <Card icon={"🌀"} numericVal={"85%"} text={"Goals Completed"}/>
        <Card icon={"⚡"} numericVal={"1,240"} text={"Calories Burned Today"}/>
      </div>


      <div className={"grid grid-cols-3 mt-10"}>
        <div className={"col-span-2"}>
          <UpcomingWorkouts/>
          <WeeklyActivity/>
        </div>

        <div className={"flex flex-col gap-5"}>
          <Streak/>
          <RecentActivity/>
          <TodaysChallenge/>
        </div>
      </div>
    </div>
  </>)
}

export default Home;