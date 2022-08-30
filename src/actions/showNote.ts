import { Context, Telegraf } from "telegraf";
import { sampledata } from "../model/sampledata";
import Welcome from "../components/welcome";

const ShowNote = (bot: Telegraf, ctx: Context): Context => {
  ctx.reply("Notes from ur list").then(() => {
    sampledata.map((note: any) => {
      ctx.reply(`/${note.title}`);
      bot.command(`${note.title}`, (ctx) => {
        ctx.reply(`${note.content}`, {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Back to Main",
                  callback_data: "back",
                },
              ],
            ],
          },
        });
      });
    });
  });

  bot.action("back", (ctx) => {
    Welcome(ctx);
  });

  return ctx;
};

export default ShowNote;
