const express = require("express");
const app = express();

const port = process.env.PORT || 4003;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/user", (req, res) => {
  res.send({
    name: "John Doe",
    age:16
  });
});
app.get("/goal", (req, res) => {
  res.send([
    {
        1: "John Doe",
        2: "Doe",
        3: "Jane",
        4: "Smith",
        5: "Mike",
    }
  ]);
});

app.listen(port, () => {
  console.log("app is listening on port " + port);
});
