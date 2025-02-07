import { Bot, hydrateFiles } from "./deps.ts";
import { BOT_TOKEN } from "./helpers/constants.ts";
import MyContext from "./helpers/context.ts";
import plugins from "./composer/plugins.ts";
import menus from "./composer/menus.ts";
import commands from "./composer/commands.ts";
import onErrorHandler from "./handlers/on_error_handler.ts";
import game from "./composer/on.ts";

export const bot = new Bot<MyContext>(BOT_TOKEN);

bot.api.config.use(hydrateFiles(bot.token));

bot.use(plugins);
bot.use(menus);
bot.use(commands);
bot.use(game);

bot.catch(onErrorHandler);
