import express, { Express, Request, Response } from "express";
import noteRoute from "./route/note";

const app: Express = express();

app.use(express.json());

app.use("/api", noteRoute);

// wildcard router
app.use("*", (req: Request, res: Response) => {
  return res.status(404).json({ error: "page not found" });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
