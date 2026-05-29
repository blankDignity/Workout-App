import {Link} from "react-router-dom"

function Sidebar() {
  return (
      <aside className="w-60 h-screen">
        <nav className="h-full flex flex-col bg-[#16161d] border-r border-zinc-800 shadow-sm p-4 gap-6">

          <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
            <div className="w-10 h-10 bg-red-400 rounded-2xl p-2 flex items-center justify-center">
              <img src="../../src/assets/dumbbell-svgrepo-com.svg" alt="logo" className="w-full h-full"/>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-white">FITFORGE</span>
              <span className="text-[#8b8b95] font-light text-sm">Train Harder</span>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-4 flex flex-col gap-3 flex-1 text-zinc-400">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/addWorkout" className="hover:text-white transition">Add Workout</Link>
            <Link to="/workoutPlans" className="hover:text-white transition">Workout Plans</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
          </div>

          <div className="border-t border-zinc-800 pt-4 flex flex-col gap-3 text-zinc-400">
            <div className="hover:text-white cursor-pointer transition">Progress</div>
            <div className="hover:text-white cursor-pointer transition">Settings</div>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-3 items-center border-t border-zinc-800">
            <div className="w-10 h-10 bg-red-300 rounded-2xl p-2 flex items-center justify-center">
              <img src="../../src/assets/usr.png" alt="logo"
                   className="rounded-full object-cover aspect-square"/>
            </div>

            <div className="flex flex-col leading-tight">
              <span className=" text-xl font-bold text-white">Samuel Sevian</span>
              <span className="text-[#8b8b95] font-light text-sm">Pro Member</span>
            </div>
          </div>

        </nav>
      </aside>
  )
}

export default Sidebar;
