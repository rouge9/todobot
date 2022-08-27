import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json);

// wildcard router
app.use("*", (req, res) => {
  res.status(404).json({ error: "page not found" });
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
