const express = require('express');
const app = express();
// const path = require('path');
const port = 3000;
const {Client} = require('pg');

const connection = new Client({
  host: "localhost",
  user: "postgres",
  password: "sakshyam",
  port: 5432,
  database: "mydb",
});

connection.connect(undefined).then(() => {
  console.log("Connected to the database.");
})

app.get('/', async (req, res) => {
  // const result = await connection.query("SELECT * FROM users;");
  // console.log(result.rows[0]);
  res.send('Test');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})