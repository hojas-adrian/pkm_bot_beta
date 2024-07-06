import { Composer } from "../deps.ts";
import onSetCommandHandler from "../handlers/on_set_command_handler.ts";
import MyContext from "../helpers/context.ts";
import isAdmin from "../middlewares/is_admin.ts";

const composer = new Composer<MyContext>();

composer.command("start", async (ctx) => {
  console.log(ctx.session);

  await ctx.reply("hola soy el profesor oak escoge entre estos pakemonsc", {});
});

composer.command("set", isAdmin, onSetCommandHandler);
composer.command("ping", isAdmin, async (ctx) => await ctx.reply("pong"));

export default composer;
