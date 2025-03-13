const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/mahasiswa/:name", (req, res) => {
  res.send(`halo ${req.params.name}, category= ${req.query.cat} `)
});

app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});
 