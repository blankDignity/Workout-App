import type {UpcomingWorkout} from "../types/upcomingWorkout.ts";

interface WorkoutCardProps {
  workout: UpcomingWorkout;
}

export function WorkoutCard({workout}: WorkoutCardProps) {
  return (<div className={"flex justify-between items-center bg-[#18181e] hover:bg-[#1e1e26] m-2 rounded-2xl h-22"}>
    <div className={"flex gap-6 items-center p-4"}>
      <svg className={"w-12 h-12 bg-[#ff4757] p-2.5 rounded-2xl"} fill="white" id="Layer_1" data-name="Layer 1"
           viewBox="0 0 24 24">
        <path
            d="M15.477,18.61c0-1.283-.808-2.029-2.357-3.344-.35-.3-.728-.618-1.118-.972-.445.409-.868.769-1.256,1.1C9.2,16.7,8.523,17.339,8.523,18.61a3.477,3.477,0,0,0,6.954,0Z"/>
        <path
            d="M16.408,4.035c-1.2-1.019-2.44-2.072-3.694-3.325L12,0,11.3.711c-2.254,2.262-3.32,5.736-3.782,7.82a6.04,6.04,0,0,1-.779-1.785L6.312,5.109,5.079,6.266c-2.159,2.028-3.6,4.039-3.6,7.259a10.422,10.422,0,0,0,7.8,10.18A11.153,11.153,0,0,0,11,24a5.491,5.491,0,0,1-4.485-5.39c0-2.25,1.357-3.4,2.928-4.742.561-.477,1.2-1.018,1.845-1.667L12,11.493l.708.708c.576.576,1.152,1.064,1.709,1.538,1.576,1.337,3.064,2.6,3.064,4.871a5.489,5.489,0,0,1-4.456,5.384A10.51,10.51,0,0,0,22.52,13.527C22.52,9.225,19.687,6.82,16.408,4.035Z"/>
      </svg>
      <div className={"flex flex-col"}>
        <div className={"font-bold"}>{workout.label}</div>
        <div className={"text-[#8b8b95]"}>{workout.dateAndTime}</div>
      </div>
    </div>
    <div className={"flex gap-2 -mr-3 p-8 text-[#8b8b95] items-center font-medium"}>
      <svg className="w-4" viewBox="0 0 24 24">
        <path fill="#ffffff"
              d="M14.848 13.067L12.5 11.711V7a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .25.433l2.598 1.5a.496.496 0 0 0 .682-.183a.5.5 0 0 0-.182-.683zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.52-.006 9.994-4.48 10-10c0-5.523-4.477-10-10-10zm0 19a9 9 0 1 1 0-18a9.01 9.01 0 0 1 9 9a9 9 0 0 1-9 9z"/>
      </svg>
      {workout.duration}</div>
  </div>)
}