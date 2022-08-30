import { Context, Telegraf } from "telegraf";

const EditNote = (bot: Telegraf, ctx: Context): Context => {
  ctx.answerCbQuery();
  ctx.reply("Note Edited");
  return ctx;
};

export default EditNote;
