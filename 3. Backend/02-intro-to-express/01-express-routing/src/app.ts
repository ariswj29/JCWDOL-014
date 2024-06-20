import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send("Coming from POST");
});

app.put("/:id", (req, res) => {
  console.log(req);
  res.send(`Coming from PUT with id ${req.params.id}`);
});

app.delete("/:id", (req, res) => {
  res.send(`Coming from DELETE with id ${req.params.id}`);
});

app.get(
  "/example",
  (req, res, next) => {
    console.log("This log wont show up");
    next();
  },
  (req, res) => {
    res.send("Hello from /example");
  }
);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
