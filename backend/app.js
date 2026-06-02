const express = require('express');
const app = express();
const cors = require('cors');
// const path = require('path');
const port = 3000;
const {Client} = require('pg');

app.use(cors());
app.use(express.json());

const connection = new Client({
  host: "localhost",
  user: "postgres",
  password: "sakshyam",
  port: 5432,
  database: "mydb",
});

connection.connect(undefined).then(() => {
  console.log("Connected to the database.");
}).catch(err => {
  console.log("Database connection failed with error: ", err);
  process.exit(1);
})

app.get('/api/workouts', async (req, res) => {
  const result = await connection.query("SELECT * FROM workout_list;");
  res.json(result.rows);
})

app.delete('/api/workouts/:id', async (req, res) => {
  const {id} = req.params;

  const result = await connection.query(`DELETE
                                         FROM workout_list
                                         WHERE id = $1;`, [id]);

  res.json(result.rows[0]);
})

app.post('/api/workout_list', async (req, res) => {
  const {workout_name, muscle_group} = req.body;

  try {
    const result = await connection.query('INSERT INTO workout_list (workout_name, muscle_group) VALUES ($1,$2) RETURNING *;', [workout_name, muscle_group]);

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

app.post('/api/workout_plan', async (req, res) => {
  const {workout_name, muscle_group, day} = req.body;

  try {
    const result = await connection.query('INSERT INTO workout_plan (workout_name, muscle_group, day) VALUES ($1, $2, $3) RETURNING *', [workout_name, muscle_group, day])
    res.json(result[0]);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});