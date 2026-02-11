import {useEffect} from "react";

export function Workout_list() {
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:3000/api/workouts");

        if (!response.ok) {
          console.log(`Response Status: ${response.status}`);
          return;
        }
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }

    const res = getData();
    console.log(res);
  }, []);

  return (
      <>
        <div id={"workout_list"}>
        </div>
      </>
  );
}
