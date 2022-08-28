import { Telegraf, Context } from "telegraf";
import { Axios } from "axios";
import * as dotenv from "dotenv";
import Welcome from "./components/welcome";

dotenv.config();

if (!process.env.TOKEN) {
  throw new Error("ENVIRONMENT VARIABLE NOT FOUND: TELEGRAM_TOKEN");
}

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx: Context) => {
  Welcome(ctx);
});

bot.launch();