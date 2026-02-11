import {Workout_list} from './components/workout_list.tsx'
import {Timer} from './components/timer.tsx'
import {Nav_bar} from './components/nav_bar.tsx'
import {Form} from './components/form.tsx'

function App() {
  return (
      <>
        <Nav_bar/>
        <Form/>
        <Workout_list/>
        <Timer/>
      </>
  )
}

export default App