import { Context } from "telegraf";

const DeleteNote = (ctx: Context): Context => {
  ctx.answerCbQuery();
  ctx.reply("Note Deleted");
  return ctx;
};

export default DeleteNote;
