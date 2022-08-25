import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.TOKEN) {
  throw new Error("ENVIRONMENT VARIABLE NOT FOUND: TELEGRAM_TOKEN");
}

const bot = new Telegraf(process.env.TOKEN);

const help = `
say something to me
/start - start bot
/help - help
cat - to get a meow
`;

bot.start((ctx) => {
  ctx.reply(ctx.from.first_name + " have enterd start command");
});

bot.help((ctx) => {
  ctx.reply(help);
});

bot.hears("cat", (ctx) => {
  ctx.reply("meow");
});

bot.command("test", (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "upload_photo");

  ctx.telegram.sendPhoto(
    ctx.chat.id,
    "https://en.wikipedia.org/wiki/File:West_side_of_Manhattan_from_Hudson_Commons_(95103p).jpg",
    { reply_to_message_id: ctx.message.message_id }
  );
});

bot.command("city", (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "upload_video");
  ctx.telegram.sendAnimation(
    ctx.chat.id,
    "https://c.tenor.com/ZWMuf-7zrJAAAAAC/city-day.gif"
  );
});

bot.command("group", (ctx) => {

  let cities = [ "https://cdn.britannica.com/69/156369-050-75E7FD08/skyline-Dubai-United-Arab-Emirates.jpg",  "https://cdn.britannica.com/69/156369-050-75E7FD08/skyline-Dubai-United-Arab-Emirates.jpg"]
 const result =  cities.map(city=>{
    return{
      type: 'photo',
      media: {source: city}
    }
  })

  ctx.telegram.sendMediaGroup(ctx.chat.id, result);
});

bot.launch();
