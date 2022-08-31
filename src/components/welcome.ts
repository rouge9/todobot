import { Context } from "telegraf";

const Welcome = (ctx: Context): Context => {
  const username = ctx.from?.username;
  const text = `welcome ${username}, what can i todo u for 🤣`;

  ctx
    .replyWithPhoto({ source: "src/assets/to-do-list.png" }, { caption: text })
    .then(() => {
      button(ctx);
    });
  const button = (ctx: Context) => {
    ctx.reply("for more info /info", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "New Note", callback_data: "create" },
            { text: "Show Note", callback_data: "show" },
          ],
          [
            { text: "Edit Note", callback_data: "edit" },
            { text: "Delete Note", callback_data: "delete" },
          ],
        ],
      },
    });
  };

  return ctx;
};

export default Welcome;
