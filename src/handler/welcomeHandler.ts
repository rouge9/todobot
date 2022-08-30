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
      NewNote(bot, ctx);
    } else if (symbol == "show") {
      ShowNote(bot, ctx);
    } else if (symbol == "edit") {
      EditNote(bot, ctx);
    } else if (symbol == "delete") {
      DeleteNote(bot, ctx);
    } else {
      ctx.reply("wrong entry");
    }
  });
};

export default welcomeHandler;
