const express = require('express');
const app = express();
// const path = require('path');
const port = 3000;
const {Client} = require('pg');

const connection = new Client({
  host: "localhost",
  user: "postgres",
  password: "sakshyam",
  database: "mydb",
  port: 5432,
});

connection.connect().then(() => {
  console.log("Connected to the database.");
})

const { id, name } = { id: 11, name: "Sam" };

const insert_query = "INSERT INTO users (id, name) VALUES ($1, $2)";
connection.query(insert_query, [id, name], (err, result) => {
  if (err)
    console.log(err);
  else {
    console.log(result);
    console.log("Sent");
  }

});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use(express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
