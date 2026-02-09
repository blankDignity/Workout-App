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
}).catch(err =>{
  console.log("Database connection failed with error ");
  process.exit(1);
})

app.get('/', async (req, res) => {
  // const result = await connection.query("SELECT * FROM users;");
  // console.log(result.rows[0]);
  res.send('Test');
});

app.get('/api/data', async (req, res) => {
  const result = await connection.query("SELECT * FROM users;");
  res.json(result.rows);
})

app.post('/users', async(req, res) => {
  const {id, name} = req.body;

  try{
    const result = await connection.query('INSERT INTO users (id, name) VALUES ($1,$2) RETURNING *;', [id, name]);

    res.json(result.rows[0]);
  }
  catch (err) {
    res.status(500).json({error: err.message});
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})