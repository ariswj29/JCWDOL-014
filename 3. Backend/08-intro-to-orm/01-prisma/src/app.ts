import express from "express";
import branchRouter from "./routers/branch-route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/v1/", branchRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
