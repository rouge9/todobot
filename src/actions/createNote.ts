import { Context, Telegraf } from "telegraf";
import { sampledata } from "../model/sampledata";
import Welcome from "../components/welcome";

const NewNote = (bot: Telegraf, ctx: Context): Context => {
  const user_message = `type /title to enter ur title name`;
  ctx.reply(user_message);
  bot.command("/title", (ctx) => {
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
      ctx.reply("please enter the titilt after /titile");
    }

    add_content(titile);
  });

  const add = (new_title: string, new_content: string) => {
    ctx.reply("sucesfully created", {
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
    const note = {
      title: new_title,
      content: new_content,
    };

    sampledata.push(note);
  };

  const add_content = (title: string) => {
    const user_message = `type /content to enter content`;
    ctx.reply(user_message);

    bot.command("/content", (ctx) => {
      const input = ctx.message.text;
      const inputArray = input.split(" ");
      let content: string = "";

      if (inputArray.length == 1) {
        content = "please enter the content";
      } else {
        inputArray.shift();
        content = inputArray.join(" ");
      }
      add(title, content);
    });
  };

  bot.action("back", (ctx) => {
    Welcome(ctx);
  });

  return ctx;
};

export default NewNote;
