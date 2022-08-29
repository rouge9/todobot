import { Context } from "telegraf";

const ShowNote = (ctx: Context): Context => {
  ctx.answerCbQuery();
  ctx.reply("Notes");
  return ctx;
};

export default ShowNote;
