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

app.get('/', async (req, res) => {
  res.send('Test');
});

app.get('/api/data', async (req, res) => {
  const result = await connection.query("SELECT * FROM users;");
  res.json(result.rows);
});

app.get('/api/workouts', async (req, res) => {
  const result = await connection.query("SELECT * FROM workout_list;");
  res.json(result.rows);
})

app.post('/api/workout_list', async (req, res) => {
  const {name, target_muscle_group} = req.body;

  try {
    const result = await connection.query('INSERT INTO workout_list (workout_name, muscle_group) VALUES ($1,$2) RETURNING *;', [name, target_muscle_group]);

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});