const router = require("express").Router();
const conn = require("../database/db");

router.get("/", (req, res) => {
  createTabel();
  res.json({
    res: "Created table",
  });
});

router.get("/results", async (req, res) => {
  conn.query(`SELECT * FROM votacao`, (err, result) => {
    res.json({
      result,
    });
  });
});

router.post("/votes", async (req, res) => {
  conn.query(`UPDATE votacao SET votes=votes+1 WHERE type='${req.body.vote}'`);
  res.json({
    res: "ok",
  });
});

router.post("/cleanup", async (req, res) => {
  conn.query(`UPDATE votacao SET votes=0 WHERE type='cats'`);
  conn.query(`UPDATE votacao SET votes=0 WHERE type='dogs'`);
  res.json({
    res: "ok",
  });
});

function createTabel() {
  conn.query(`CREATE TABLE IF NOT EXISTS votacao(
                type VARCHAR(20),
                votes INT
              )
            `);
  conn.query(`INSERT INTO votacao VALUES ('dogs', 0)`);
  conn.query(`INSERT INTO votacao VALUES ('cats', 0)`);
}

module.exports = router;
