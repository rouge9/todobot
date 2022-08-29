import { Context } from "telegraf";

const Welcome = (ctx: Context): Context => {
  const username = ctx.from?.username;
  const text = `welcome ${username}, what can i todo u for 🤣.\n for more info /info`;
  ctx.reply(text, {
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

  return ctx;
};

export default Welcome;
