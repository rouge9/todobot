import { Context, Telegraf } from "telegraf";
import { sampledata } from "../model/sampledata";
import Welcome from "../components/welcome";

const EditNote = (bot: Telegraf, ctx: Context): Context => {
  const user_message = `to edit titile type /titleedit 
  to edit contnet type /contentedit `;
  ctx.reply(user_message);
  bot.command("/titleedit", (ctx) => {
    const input = ctx.message.text;
    const inputArray = input.split(" ");
    let titile = " ";

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
          const contentEdited = titile;
          const titleEdited = note.title;
          add(titleEdited, contentEdited);
        }
      });
    }
  });

  bot.command("/content", (ctx) => {
    const input = ctx.message.text;
    const inputArray = input.split(" ");
    let content = "";

    if (inputArray.length == 1) {
      content = "flag";
    } else {
      inputArray.shift();
      content = inputArray.join(" ");
    }

    if (content == "flag") {
      ctx.reply("please enter the title after /title");
    } else {
      sampledata.map((note) => {
        if (note.content == content) {
          const contentEdited = content;
          const titleEdited = note.title;
          add(titleEdited, contentEdited);
        }
      });
    }
  });
  const add = (new_title: string, new_content: string) => {
    ctx.reply("sucesfully edited", {
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

  bot.action("back", (ctx) => {
    Welcome(ctx);
  });

  return ctx;
};

export default EditNote;
