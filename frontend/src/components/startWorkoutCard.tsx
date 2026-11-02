interface onCloseProps  {
    onClose: () => void;
}

export function StartWorkoutCard({ onClose} : onCloseProps) {
  return (
      <div className={"fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center rounded-2xl"}>
        <button onClick={onClose}>X</button>
      </div>
  )
}
