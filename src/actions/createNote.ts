import { Context, Telegraf } from "telegraf";
import { sampledata } from "../model/sampledata";

interface INote {
  id: number;
  title: string;
  content: string;
}

const NewNote = (bot: Telegraf, ctx: Context): Context => {
  ctx.reply("Add title");

  return ctx;
};

export default NewNote;
