import { Telegraf, Context } from "telegraf";
import NewNote from "../actions/createNote";
import EditNote from "../actions/editNote";
import DeleteNote from "../actions/deleteNote";
import ShowNote from "../actions/showNote";

const NoteHears = (bot: Telegraf) => {
  bot.hears("New Note", (ctx: Context) => {
    NewNote(ctx);
  });

  bot.hears("Show Note", (ctx: Context) => {
    ShowNote(ctx);
  });

  bot.hears("Edit Note", (ctx: Context) => {
    EditNote(ctx);
  });
  bot.hears("Delete Note", (ctx: Context) => {
    DeleteNote(ctx);
  });
};

export default NoteHears;
