const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const {Client} = require('pg');

app.use(cors());
app.use(express.json());

const connection = new Client({
  host: "localhost", user: "postgres", password: "sakshyam", port: 5432, database: "mydb",
});

connection.connect(undefined).then(() => {
  console.log("Connected to the database.");
}).catch(err => {
  console.log("Database connection failed with error: ", err);
  process.exit(1);
});

app.get('/api/workouts', async (req, res) => {
  try {
    const query = `
        SELECT w.id,
               w.workout_name,
               w.muscle_group,
               w.date,
               w.time,
               COALESCE(
                               json_agg(
                               json_build_object('name', e.name, 'sets', e.sets, 'reps', e.reps)
                                       ) FILTER (WHERE e.id IS NOT NULL), '[]'
               ) AS exercise_names
        FROM workout_list w
                 LEFT JOIN exercise_list e ON w.id = e.workout_id
        GROUP BY w.id
        ORDER BY w.id DESC;
    `;

    const result = await connection.query(query);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});


app.post('/api/workout_list', async (req, res) => {
  const {workout_name, muscle_group, exercise_names, date, time} = req.body;

  try {
    await connection.query('BEGIN');

    const workoutQuery = `
        INSERT INTO workout_list (workout_name, muscle_group, date, time)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;
    const workoutResult = await connection.query(workoutQuery, [workout_name, muscle_group, date || null, time || null]);

    const newWorkout = workoutResult.rows[0];

    const exerciseQuery = `
        INSERT INTO exercise_list (workout_id, name, sets, reps)
        VALUES ($1, $2, $3, $4)
        RETURNING name, sets, reps;
    `;

    const savedExercises = [];
    if (exercise_names && Array.isArray(exercise_names)) {
      for (const exercise of exercise_names) {
        const exerciseResult = await connection.query(exerciseQuery, [newWorkout.id, exercise.name, exercise.sets, exercise.reps]);
        savedExercises.push(exerciseResult.rows[0]);
      }
    }

    await connection.query('COMMIT');

    res.json({
      ...newWorkout, exercise_names: savedExercises
    });

  } catch (err) {
    await connection.query('ROLLBACK');
    res.status(500).json({error: err.message});
  }
});


app.delete('/api/workouts/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const result = await connection.query('DELETE FROM workout_list WHERE id = $1 RETURNING *;', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});