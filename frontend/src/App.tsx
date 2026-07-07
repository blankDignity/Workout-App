import Home from './pages/home.tsx'
import {Route, Routes} from "react-router"
import AddWorkout from "./pages/addWorkout.tsx";
import ExercisePlans from "./pages/exercisePlans.tsx";
import About from "./pages/about.tsx";
import Sidebar from "./components/sidebar.tsx";
import Workouts from "./pages/workouts.tsx";
import type {WorkoutType} from "./types/workout.ts";
import {useEffect, useState} from "react";


type Workout_with_id = WorkoutType & {
  id: number;
}

function App() {
  const [workouts, setWorkouts] = useState<Workout_with_id[]>([{
    id: 0, workout_name: "", muscle_group: "", exercise_names: [], date: "", time: "",
  }]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:3000/api/workouts");

        if (!response.ok) {
          console.log(`Response Status: ${response.status}`);
          return;
        }
        const result: Workout_with_id[] = await response.json();
        setWorkouts(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }

    getData().then();
  }, []);

  return (
      <div className="flex">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path={"/workoutPlans"} element={<ExercisePlans/>}/>
          <Route path="/addWorkout" element={<AddWorkout setWorkouts={setWorkouts}/>}/>
          <Route path={"/workout"} element={<Workouts workouts={workouts}/>}/>
          <Route path={"/about"} element={<About/>}/>
        </Routes>
      </div>)
}

export default App