import {Workout_list} from './components/workout_list.tsx'
import {Timer} from './components/timer.tsx'
import {Nav_bar} from './components/nav_bar.tsx'


/* todo : instead of hardcoding the workout, add a input box that takes the workout and pushes in the database,
   todo: and retrieve it*/

// async function sendData(){
//   const response = await fetch("http://localhost:3000/users", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       id: 3920,
//       name: 'Jackson',
//     }),
//   });
//
//   const data = await response.json();
//   console.log(data);
// }
//
// sendData();

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