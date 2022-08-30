import { Telegraf, Context } from "telegraf";
import NewNote from "../actions/createNote";
import EditNote from "../actions/editNote";
import DeleteNote from "../actions/deleteNote";
import ShowNote from "../actions/showNote";

const NoteHears = (bot: Telegraf) => {
  bot.hears("New Note", (ctx: Context) => {
    NewNote(bot, ctx);
  });

  bot.hears("Show Note", (ctx: Context) => {
    ShowNote(bot, ctx);
  });

  bot.hears("Edit Note", (ctx: Context) => {
    EditNote(bot, ctx);
  });
  bot.hears("Delete Note", (ctx: Context) => {
    DeleteNote(bot, ctx);
  });
};

export default NoteHears;
