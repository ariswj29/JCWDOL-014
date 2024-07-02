import express, { Application, Request, Response } from "express";
import router from "./routers/index";

const app: Application = express();
const PORT = 5670;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
