import Home from './pages/home.tsx'
import {Route, Routes} from "react-router"
import AddWorkout from "./pages/addWorkout.tsx";
import ExercisePlans from "./pages/exercisePlans.tsx";
import About from "./pages/about.tsx";
import Sidebar from "./components/sidebar.tsx";
import Workouts from "./pages/workouts.tsx";

function App() {
  return <div className="flex">
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path={"/workoutPlans"} element={<ExercisePlans/>}/>
      <Route path="/addWorkout" element={<AddWorkout/>}/>
      <Route path={"/workout"} element={<Workouts/>}/>
      <Route path={"/about"} element={<About/>}/>
    </Routes>
  </div>
}

export default App