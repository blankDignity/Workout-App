import {Link} from "react-router-dom";

export function TodaysChallenge() {
  return (
      <div className={"bg-linear-to-br from-[#5f27cd] to-[#341f97] rounded-xl mr-10 p-6"}>
        <div className="font-bold text-xl mb-2">
          Today's Challenge
        </div>

        <div className={""}>
          Complete a 15-minute HIIT session
        </div>

        <div className={"mt-6"}>
          <Link to={"/workoutPlans"} className={"bg-white text-[#341f97] px-5 py-3 font-bold rounded-xl"}>
            Start Now
          </Link>
        </div>
      </div>
  )
}