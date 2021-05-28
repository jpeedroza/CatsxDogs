const express = require("express");
const mysql = require("mysql");
const app = express();

const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "my-secret-pw",
  database: "teste",
});

app.use(express.json());
app.get("/", (req, res) => {
  conn.connect();
  conn.query(`CREATE TABLE IF NOT EXISTS votacao(
                type VARCHAR(20),
                votes INT
              )
            `);
  conn.query(`INSERT INTO votacao VALUES ('dogs', 0)`);
  conn.query(`INSERT INTO votacao VALUES ('cats', 0)`);
  conn.end();
  res.json({
    res: "ok",
  });
});

app.get("/dogs", async (req, res) => {
  conn.query(`UPDATE votacao SET votes=votes+1 WHERE type='dogs'`);
  res.json({
    res: "ok",
  });
});

app.get("/cats", async (req, res) => {
  conn.query(`UPDATE votacao SET votes=votes+1 WHERE type='cats'`);
  res.json({
    res: "ok",
  });
});

app.get("/cleanup", async (req, res) => {
  conn.query(`UPDATE votacao SET votes=0 WHERE type='dogs' OR type='cats'`);
  res.json({
    res: "ok",
  });
});

app.listen(3001, () => {
  console.log("conectado");
});
