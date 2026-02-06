import {Workout_list} from './workout_list.tsx'
import {Timer} from './timer.tsx'
import {Nav_bar} from './nav_bar.tsx'


/* todo : instead of hardcoding the workout, add a input box that takes the workout and pushes in the database,
   todo: and retrieve it*/

function App() {
  return (
      <>
        <Nav_bar/>
        <Workout_list/>
        <Timer/>
      </>
  )
}

export default App