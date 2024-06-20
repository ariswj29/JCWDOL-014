import express, { NextFunction, Request, Response } from "express";

const app = express();
const PORT = 8000;

const Logger = (req: Request, res: Response, next: NextFunction) => {
  console.log("Application Middleware");
  console.log("Request URL:", req.url);
  next();
};

// application middleware
app.use(Logger);

// build-in middleware
app.use(express.static("public"));

// route middleware
app.use("/users/:id", (req, res, next) => {
  console.log("This log will show up");
  next();
});

app.get("/users", (req, res) => {
  res.send("Hello Middlewqare");
});

app.post("/users", (req, res) => {
  res.send("Hello Middleware POST");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
