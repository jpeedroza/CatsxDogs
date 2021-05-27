const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    answer: "Worked",
  });
});

app.listen("3001", () => {
  console.log("Running");
});
