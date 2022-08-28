import express, { Request, Response } from "express";
import { notes } from "../model/note";
const router = express.Router();

router.post("/note", (req: Request, res: Response) => {
  const note = req.body;

  notes.push(note);

  return res.send(note);
});

router.get("/note", (req: Request, res: Response) => {
  return res.send(notes);
});

router.put("/note/:id", (req: Request, res: Response) => {
  const id = req.params;
  const item = req.body;
  console.log(id.id);

  notes.map((obj) => {
    if (obj.id == id.id) {
      obj.title = item.title;
      obj.content = item.content;

      return res.send(obj);
    } else {
      return res.status(400).json({ message: "item not found" });
    }
  });
});

router.delete("/note/:id", (req: Request, res: Response) => {
  const id = req.params;

  notes.pop();

  return res.send(notes);
});

export default router;
