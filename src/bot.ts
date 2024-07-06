import { Bot, hydrateFiles } from "./deps.ts";
import { BOT_TOKEN } from "./helpers/constants.ts";
import MyContext from "./helpers/context.ts";
import plugins from "./composer/plugins.ts";
import inGroup from "./composer/in-group.ts";
import callbacks from "./composer/callbacks.ts";
import onErrorHandler from "./handlers/on_error_handler.ts";

export const bot = new Bot<MyContext>(BOT_TOKEN);

bot.api.config.use(hydrateFiles(bot.token));
bot.use(plugins);

bot.command("start", async (ctx) => {
  await ctx.react("🐳");
});

bot.use(callbacks);
bot.use(inGroup);

bot.catch(onErrorHandler);
