type cardProps = {
  icon: string,
  numericVal: string,
  text: string,
}

export function Card(props: cardProps) {
  return (
      <div
          className="pl-6 pt-5 h-40 w-72 bg-linear-to-r from-[#16161d] to-[#1d171f] rounded-2xl border-2 border-[#2a2a31]
           hover:border-[#ff6b81]">
        <div className={"pb-5 text-3xl"}>{props.icon}</div>
        <div className={"font-bold text-3xl pb-2"}>{props.numericVal}</div>
        <div className={"text-[#8b8b95] text-[14px] font-light"}>{props.text}</div>
      </div>
  )
}
