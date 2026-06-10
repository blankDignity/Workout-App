export function ThisWeeksGoal() {
  return (
      <div className={"rounded-xl bg-linear-to-br from-[#ff4757] to-[#ff6b81] p-6 mt-10"}>
        <div className={"font-bold text-xl mb-2"}>This Week's Goal</div>
        <div>Complete 5 workouts</div>
        <div className={"mt-2 w-full h-3 bg-red-300 rounded"}>
          <div className={"bg-white h-3 rounded"} style={{width: "60%"}}>
          </div>
        </div>
        <div className={"text-zinc-200"}>3/5 completed</div>
      </div>
  )
}