// import mongoose from "mongoose";

// export interface INote extends mongoose.Document {
//   title: string;
//   content: string;
// }

// export const NoteSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
// });

// const Note = mongoose.model<INote>("User", NoteSchema);
// export default Note;

interface INote {
  id: string;
  title: string;
  content: string;
}

const notes = [
  {
    id: "1",
    title: "note1",
    content: "content1",
  },
  {
    id: "2",
    title: "note2",
    content: "content2",
  },
];

export { notes };
