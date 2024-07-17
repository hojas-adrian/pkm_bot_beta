import { Menu } from "../deps.ts";
import onBetaCallbackHandler from "../handlers/on_beta_callback_handler.ts";
import MyContext from "../helpers/context.ts";

export default new Menu<MyContext>("pkmList").text(
  {
    text: "ver mis pokemons",
  },
  onBetaCallbackHandler
);
