import {Link} from "react-router-dom";

const upcomingSessions = [{label: "Chest & Triceps", date: "Thu, May 28", time: "09:00"}, {
  label: "Leg Day",
  date: "Fri, May 29",
  time: "18:00"
}, {label: "Back & Biceps", date: "Sat, May 30", time: "09:00"},]

export function UpcomingSessions() {
  return (<div className={"h-fit w-100 mt-10 bg-[#16161d] rounded-xl border border-zinc-700 p-6"}>
    <div className={"flex items-center justify-between "}>
      <div className={"font-bold text-xl"}>
        Upcoming Sessions
      </div>
      <Link to={"/addWorkout"}>
        <svg className={"w-8 bg-[#ff4757] rounded-xl p-2 "} fill="white" id="Capa_1" x="0px" y="0px"
             viewBox="0 0 512 512">
          <g>
            <path
                d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
          </g>
        </svg>
      </Link>
    </div>
    <div className={"flex flex-col gap-2 mt-6"}>
      {upcomingSessions.map((session, index) => (
          <div className={`${index} flex flex-col bg-[#1e1e26] rounded-xl p-4`}>
            <div className={"flex justify-between items-center"}>
              <div className={"font-bold text-[18px]"}>{session.label}</div>
              <div className={"text-[#ff4757] font-extrabold text-4xl"}>.</div>
            </div>
            <div className={"text-[#8b8b97]"}>
              <span>{session.date}</span>
              <span className={"px-2 font-bold text-xl"}>.</span>
              <span>{session.time}</span>
            </div>
          </div>))}
    </div>
  </div>)
}