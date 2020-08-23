const express = require("express");
const app = express();
const users = require("./routes/users");

app.use(express.json({ extened: false }));
app.get("/", (req, res) => {
  res.send("API running Working");
});

app.use("/users", users);

app.listen(4150, () => {
  console.log("Application is running on port 4150");
});
