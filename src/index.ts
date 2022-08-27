import express from "express";
import noteRoute from "./route/note";

const app = express();

app.use(express.json());

app.use("/api", noteRoute);

// wildcard router
app.use("*", (req, res) => {
  return res.status(404).json({ error: "page not found" });
});

app.listen(5000, () => {
  console.log("server started on port 3000");
});
