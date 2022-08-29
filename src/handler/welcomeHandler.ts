import { Telegraf, Context } from "telegraf";
import NewNote from "../actions/createNote";
import EditNote from "../actions/editNote";
import DeleteNote from "../actions/deleteNote";
import ShowNote from "../actions/showNote";

const welcomeAction = ["create", "edit", "delete", "show"];

const welcomeHandler = (bot: Telegraf) => {
  bot.action(welcomeAction, (ctx: Context) => {
    const symbol = ctx.callbackQuery?.data;
    if (symbol == "create") {
      NewNote(ctx);
    } else if (symbol == "show") {
      ShowNote(ctx);
    } else if (symbol == "edit") {
      EditNote(ctx);
    } else if (symbol == "delete") {
      DeleteNote(ctx);
    } else {
      ctx.reply("wrong entry");
    }
  });
};

export default welcomeHandler;
