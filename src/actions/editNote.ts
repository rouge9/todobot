import { Context } from "telegraf";

const EditNote = (ctx: Context): Context => {
  ctx.answerCbQuery();
  ctx.reply("Note Edited");
  return ctx;
};

export default EditNote;
