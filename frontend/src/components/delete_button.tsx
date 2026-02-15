export function Delete_button({workout_name}: { workout_name: string }) {
  async function handleDelete() {
    try {
      const response = await fetch("http://localhost:3000/api/delete_workout", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({workout_name}),
      })

      console.log(`${response}`);
      if (!response.ok) {
        console.log(`Response status: ${response.status}`);
      }
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }

  return (
      <>
        <button onClick={handleDelete}>Delete</button>
      </>
  );
}