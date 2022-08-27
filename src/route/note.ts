import express from "express";
import Note from "../model/note";
const router = express.Router();

router.post("/", (req, res) => {
  const note = new Note(req.body);
});
