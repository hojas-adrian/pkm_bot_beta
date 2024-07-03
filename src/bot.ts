import { Bot, limit } from "../deps.ts";
import { BOT_TOKEN } from "./helpers/constants.ts";
import inGroup from "./composer/in-group.ts";
import callbacks from "./composer/callbacks.ts";

export const bot = new Bot(BOT_TOKEN);

bot.use(limit());

bot.command("start", async (ctx) => {
  await ctx.react("🐳");
});

bot.use(callbacks);
bot.use(inGroup);
