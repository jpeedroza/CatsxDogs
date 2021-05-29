const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "my-secret-pw",
  database: "teste",
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  createTabel();
  res.json({
    res: "Created table",
  });
});

app.post("/votes", async (req, res) => {
  conn.query(`UPDATE votacao SET votes=votes+1 WHERE type='${req.body.vote}'`);
  res.json({
    res: "ok",
  });
});

function createTabel() {
  conn.connect();
  conn.query(`CREATE TABLE IF NOT EXISTS votacao(
                type VARCHAR(20),
                votes INT
              )
            `);
  conn.query(`INSERT INTO votacao VALUES ('dogs', 0)`);
  conn.query(`INSERT INTO votacao VALUES ('cats', 0)`);
  conn.end();
}

app.listen(3001, () => {
  console.log("conectado");
});
