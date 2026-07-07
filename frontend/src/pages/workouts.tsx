import {useState} from "react";
import {WorkoutCard} from "../components/workoutCard.tsx";
import type {WorkoutType} from "../types/workout.ts";
import {Link} from "react-router-dom";

const categories = ["All", "Strength", "Cardio", "HIIT", "Flexibility", "Custom"];

type Workout_with_id = WorkoutType & {
  id: number;
}

type WorkoutsProps = {
  workouts: Workout_with_id[];
}

export default function Workouts({workouts}: WorkoutsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  return (<div className={"w-full ml-70 my-10 mr-10"}>
    <div className={"w-full flex justify-between items-center"}>
      <div className={"font-bold text-5xl"}>
        My Workouts
      </div>
      <Link to={"/addWorkout"} className={"flex font-bold items-center gap-2 bg-[#ff4757] p-3 rounded-2xl px-5"}>
        <svg className={"w-4 "} fill="white" id="Capa_1" viewBox="0 0 512 512">
          <g>
            <path
                d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
          </g>
        </svg>
        Create Workout
      </Link>
    </div>

    <div className={"text-xl mt-3 text-zinc-400"}>Choose your challenge for today</div>

    <div className={"mt-6 flex gap-4"}>
      <div
          className={"flex gap-2 basis-48/50 outline-none border border-zinc-700 bg-[#16161d] p-3 rounded-2xl px-5 transition-all focus-within:ring-2 focus-within:ring-[#ff4757] focus-within:border-[#ff4757]"}>
        <svg className={"w-6"} viewBox="0 0 24 24" fill="none">
          <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input className={"w-full outline-none"} type={"text"}
               placeholder={"Search workouts..."}/>
      </div>
      <button
          className={"flex items-center justify-center gap-2 border border-zinc-700 bg-[#16161d] p-3 rounded-2xl hover:bg-[#1e1e26]"}>
        <svg className={"w-8"} viewBox="-0.5 0 25 25" fill="none">
          <path
              d="M22 3.58002H2C1.99912 5.28492 2.43416 6.96173 3.26376 8.45117C4.09337 9.94062 5.29 11.1932 6.73999 12.09C7.44033 12.5379 8.01525 13.1565 8.41062 13.8877C8.80598 14.6189 9.00879 15.4388 9 16.27V21.54L15 20.54V16.25C14.9912 15.4188 15.194 14.599 15.5894 13.8677C15.9847 13.1365 16.5597 12.5178 17.26 12.07C18.7071 11.175 19.9019 9.92554 20.7314 8.43988C21.5608 6.95422 21.9975 5.28153 22 3.58002Z"
              stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Filters
      </button>
    </div>

    <div className={"mt-8 ml-2 flex gap-4 [&>button]:hover:cursor-pointer"}>
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (<div key={category} onClick={() => setActiveCategory(category)}
                     className={`cursor-pointer border border-zinc-700 px-6 py-2 rounded-2xl font-medium transition-all duration-200 ${isActive ? 'bg-[#ff4757] text-white shadow-md' : 'bg-[#16161d] text-white hover:bg-[#1e1e26]'}`}>
          {category}
        </div>);
      })}
    </div>

    <div className={"grid grid-cols-2 gap-4"}>
      {workouts.map((workout) => (<WorkoutCard workout={workout}/>))}
    </div>
  </div>)
}