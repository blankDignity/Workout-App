import {NavLink} from "react-router-dom"
import type {SidebarProps} from "../types/sidebar.ts";


const navItems: SidebarProps[] = [
  {id: "home", to: "/", label: "Home", icon: "home.svg"},
  {id: "workout", to: "/workout", label: "Workout", icon: "dumbbell.svg"},
  {id: "workoutPlans", to: "/workoutPlans", label: "Exercise Plans", icon: "workoutPlan.svg"},
  {id: "addWorkout", to: "/addWorkout", label: "Add Workout", icon: "addWorkout.svg"},
  {id: "about", to: "/about", label: "About", icon: "about.svg"},
]

function Sidebar() {
  return (
      <aside className="w-60 h-screen fixed top-0 left-0">
        <nav className="h-full flex flex-col bg-[#16161d] border-r border-zinc-800 shadow-sm p-4 gap-6">

          <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
            <div className="w-10 h-10 bg-red-400 rounded-2xl p-2 flex items-center justify-center">
              <img src="../../src/assets/dumbbell.svg" alt="logo" className="w-full h-full"/>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-white">FITFORGE</span>
              <span className="text-[#8b8b95] font-light text-sm">Train Harder</span>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-4 *:py-3 flex flex-col gap-2 flex-1 text-zinc-400">
            {navItems.map((item) => (<NavLink id={item.id} to={item.to}
                                              className={({isActive}) => `flex items-center gap-3 [#ff4757] rounded-xl hover:text-white transition
              ${isActive ? "bg-[#ff4757] text-white font-semibold" : "bg-transparent hover:bg-zinc-800"}`}>
              <img src={`../../src/assets/${item.icon}`} alt={item.id} className={"w-5 ml-3"}/>
              {item.label}
            </NavLink>))}
          </div>

          <div
              className="border-y border-zinc-800 pt-4 flex flex-col gap-5 *:py-2 text-zinc-400">
            <div
                className={"flex items-center gap-3 hover:bg-[#ff4757] rounded-xl transition hover:text-white cursor-pointer"}>
              <img src={"../../src/assets/progress.svg"} alt={"progress"} className={"w-5 ml-3"}/>
              <div>Progress</div>
            </div>
            <div
                className={"flex items-center gap-3 hover:bg-[#ff4757] rounded-xl transition hover:text-white cursor-pointer mb-3"}>
              <img src={"../../src/assets/settings.svg"} alt={"setting"} className={"w-5 ml-3"}/>
              <div>Settings</div>
            </div>
          </div>

          <div className="grid grid-cols-[auto_1fr]  gap-3 items-center">
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
      </aside>)
}

export default Sidebar;
