import Home from './pages/home.tsx'
import {Route, Routes} from "react-router"
import AddWorkout from "./pages/addWorkout.tsx";
import WorkoutPlans from "./pages/workoutPlans.tsx";
import About from "./pages/about.tsx";
import Sidebar from "./components/sidebar.tsx";

function App() {
  return <div className="grid grid-cols-2">
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addWorkout" element={<AddWorkout/>}/>
      <Route path={"/workoutPlans"} element={<WorkoutPlans/>}/>
      <Route path={"/about"} element={<About/>}/>
    </Routes>
  </div>
}

export default App