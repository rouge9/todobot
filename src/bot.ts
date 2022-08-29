import { Telegraf, Context } from "telegraf";
import { Axios } from "axios";
import * as dotenv from "dotenv";
import Welcome from "./components/welcome";
import info from "./components/info";
import welcomeHandler from "./handler/welcomeHandler";
import NoteHears from "./hears/hears";

dotenv.config();

if (!process.env.TOKEN) {
  throw new Error("ENVIRONMENT VARIABLE NOT FOUND: TELEGRAM_TOKEN");
}

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx: Context) => {
  Welcome(ctx);
});

info(bot);
welcomeHandler(bot);
NoteHears(bot);

bot.launch();
