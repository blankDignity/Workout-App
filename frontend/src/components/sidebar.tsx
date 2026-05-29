import {Link} from "react-router-dom"

function Sidebar() {
  return (
      <>
        {/* *: applies the CSS to every child component individually instead of writing it to every element*/}
        <div
            className="flex flex-col gap-5 w-50 text-[18px] text-white pl-15 py-5 *:hover:underline bg-[#16161d] border-r border-zinc-800]
            border-b border-zinc-500">
          <Link to={"/"}>Home</Link>
          <Link to={"/addWorkout"}>Add Workout</Link>
          <Link to={"/workoutPlans"}>Workout Plans</Link>
          <Link to={"/about"} className={"pr-8"}>About</Link>
        </div>
      </>
  )
}

export default Sidebar;
