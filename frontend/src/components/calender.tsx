import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../index.css"

export function Calender() {
  return (
      <div className={"w-200 mt-10 bg-[#16161d] rounded-4xl border border-zinc-700 p-6"}>
        <FullCalendar  height={"620px"} plugins={[dayGridPlugin]} initialView="dayGridMonth"/>
      </div>
  )
}