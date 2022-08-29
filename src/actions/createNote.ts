import { Context } from "telegraf";

interface INote {
  id: number;
  title: string;
  content: string;
}

const NewNote = (ctx: Context): Context => {
  // const note: INote =
  ctx.answerCbQuery();
  ctx.reply("Note Created");

  return ctx;
};

export default NewNote;
