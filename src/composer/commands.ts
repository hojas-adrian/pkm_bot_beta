import { Composer } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import isAdmin from "../middlewares/is_admin.ts";
import onPokemonCommandHandler from "../handlers/on_add_pokemon_command_handler.ts";

const composer = new Composer<MyContext>();

composer.command("addpokemon", isAdmin, onPokemonCommandHandler);
composer.command("info", isAdmin, async (ctx) => await ctx.reply("pong"));

export default composer;
