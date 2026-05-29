import {Card} from "../components/card.tsx";

function Home() {

  return (<>
    <div>
      <div className="mb-3">
      <span
          className={"font-bold pt-2 text-5xl bg-linear-to-r from-[#ff4757] to-[#ff6b81] bg-clip-text text-transparent"}>PUSH YOUR LIMITS</span>
      </div>
      <div className={"text-[#8b8b95]"}>Welcome back, Sakshyam! Ready to dominate today's workout?</div>

      <div className={"cards flex gap-6"}>
        <Card icon={"🔥"} numericVal={"12"} text={"Day Streak"}/>
        <Card icon={"📈"} numericVal={"24"} text={"Workouts This Month"}/>
        <Card icon={"🌀"} numericVal={"85%"} text={"Goals Completed"}/>
        <Card icon={"⚡"} numericVal={"1,240"} text={"Calories Burned Today"}/>
      </div>
    </div>
  </>)
}

export default Home;