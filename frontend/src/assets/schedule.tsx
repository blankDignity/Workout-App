export function Schedule() {
  return (<div className={"bg-[#16161d] w-4xl border border-zinc-700 rounded-2xl my-8 p-6"}>
    <div className={"font-bold text-xl"}>Schedule</div>
    <div className="flex justify-between items-center mt-4 gap-4">
      <div className="w-1/2">
        <div className="text-zinc-400 mb-2">Date</div>
        <input
            className="w-full bg-[#1e1e26] border border-zinc-700 rounded-xl p-3 text-white outline-none focus:outline-none focus:ring-2 focus:ring-red-500 focus-visible:outline-none"
            type="date"
        />
      </div>
      <div className="w-1/2">
        <div className="text-zinc-400 mb-2">Time</div>
        <input
            className="w-full bg-[#1e1e26] border border-zinc-700 rounded-xl p-3 text-white outline-none focus:outline-none focus:ring-2 focus:ring-red-500 focus-visible:outline-none"
            type="time"
        />
      </div>
    </div>
  </div>)
}