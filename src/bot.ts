import { Bot, limit } from "../deps.ts";
import { BOT_TOKEN } from "./helpers/constants.ts";

export const bot = new Bot(BOT_TOKEN);

bot.use(limit());

bot.command("start", async (ctx) => {
  await ctx.react("🐳");
});
