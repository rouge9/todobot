import { Telegraf } from "telegraf";
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.TOKEN) {
  throw new Error("ENVIRONMENT VARIABLE NOT FOUND: TELEGRAM_TOKEN");
}

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx)=>{
  ctx.reply(ctx.from.first_name + " have enterd start command")

})


bot.launch();

