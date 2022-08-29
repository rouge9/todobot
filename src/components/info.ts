import { Telegraf, Context } from "telegraf";

const info = (bot: Telegraf) => {
  bot.command("info", (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, "Bot Info", {
      reply_markup: {
        keyboard: [
          [{ text: "Show Note" }],
          [
            { text: "New Note" },
            { text: "Edit Note" },
            { text: "Delete Note" },
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  });
};

export default info;
