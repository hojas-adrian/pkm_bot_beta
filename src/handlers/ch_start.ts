import MyContext from "../helpers/context.ts";
import { getNpcSticker } from "../helpers/utils.ts";
import pkmListButton from "../menus/pkm_list.ts";

export default async (ctx: MyContext) => {
  const oakSticker = await getNpcSticker(ctx, "oak");
  await ctx.replyWithSticker(oakSticker.file_id);

  await ctx.reply(
    `<b>${oakSticker.name}:</b> <blockquote><pre>hola de nuevo. Veamos, has capturado algun poqumon nuevo?</pre></blockquote>`,
    {
      reply_markup: pkmListButton,
      parse_mode: "HTML",
    }
  );
};
