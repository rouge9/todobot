import { Context, Telegraf } from "telegraf";

const DeleteNote = (bot: Telegraf, ctx: Context): Context => {
  ctx.answerCbQuery();
  ctx.reply("Note Deleted");
  return ctx;
};

export default DeleteNote;
