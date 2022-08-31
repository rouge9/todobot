import { Context, Telegraf } from "telegraf";
import { sampledata } from "../model/sampledata";
import Welcome from "../components/welcome";

const DeleteNote = (bot: Telegraf, ctx: Context): Context => {
  const user_message = `to delete note type /delete and the note title`;
  ctx.reply(user_message);
  bot.command("/delete", (ctx) => {
    const input = ctx.message.text;
    const inputArray = input.split(" ");
    let titile: string = " ";

    if (inputArray.length == 1) {
      titile = "flag";
    } else {
      inputArray.shift();
      titile = inputArray.join(" ");
    }

    if (titile == "flag") {
      ctx.reply("please enter the title after /title");
    }

    if (titile == "flag") {
      ctx.reply("please enter the title after /title");
    } else {
      sampledata.map((note) => {
        if (note.title == titile) {
          del();
        } else {
          ctx.reply("enter a valid title");
        }
      });
    }
  });

  const del = () => {
    ctx.reply("sucesfully deleted", {
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

    sampledata.pop();
  };

  bot.action("back", (ctx) => {
    Welcome(ctx);
  });

  return ctx;
};

export default DeleteNote;
