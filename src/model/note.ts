import mongoose from "mongoose";

export interface INote extends mongoose.Document {
  title: string;
  content: string;
}

export const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Note = mongoose.model<INote>("User", NoteSchema);
export default Note;
