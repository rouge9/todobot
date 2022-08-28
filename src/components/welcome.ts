import { Context } from "telegraf";

const Welcome = (ctx: Context): Context => {
  const username = ctx.from?.username;
  const text = `welcome ${username}, what can i todo u for 🤣`;
  ctx.reply(text, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Create Note", callback_data: "create" }],
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
