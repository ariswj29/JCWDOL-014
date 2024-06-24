import express from "express";
import "dotenv/config";

import db from "./config/db.config.js";

const app = express();
const port = process.env.DB_PORT || 8000;

app.get("/", (req, res) => {
  //   res.send("Hello World");
  db.query("SELECT * FROM students", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }

    res.status(200).json(results);
  });
});

// db.getConnection((err, connection) => {
//   if (err) {
//     console.error("Error connecting: " + err.stack);
//     return;
//   }

//   console.log("Connected as id " + connection.threadId);
// });

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
