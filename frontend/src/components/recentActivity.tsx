import {Link} from "react-router-dom";

const recentActivities = [{label: "Shoulder Shredder", time: "2 days ago", duration: 40}, {
  label: "Core Crusher", time: "3 days ago", duration: 30
}, {label: "Full Body Burn", time: "5 days ago", duration: 55},]

export function RecentActivity() {
  return (<div className={"bg-[#16161d] rounded-2xl p-6 mr-10"}>
    <div className={"font-bold text-xl mb-2"}>
      Recent Activity
    </div>

    <div className={"pl-5"}>
      {recentActivities.map(activity => (<li className={"marker:text-cyan-500 marker:text-2xl py-2"}>
        <div className={"text-[14px] font-bold"}>{activity.label}</div>
        <div className={"flex gap-1 text-[8px] text-[#8b8b91]"}>
          <div>{activity.time}</div>
          <div>{activity.duration}</div>
        </div>
      </li>))}
    </div>
    <center>
      <Link to={"/workoutPlans"} className={"text-red-400 hover:underline transition text-[14px]"}>View All
        History</Link>
    </center>
  </div>)
}