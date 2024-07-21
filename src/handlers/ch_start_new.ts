import MyContext from "../helpers/context.ts";
import { setKv } from "../helpers/kv_actions.ts";
import { getNpcSticker } from "../helpers/utils.ts";

export default async (ctx: MyContext) => {
  const oakSticker = await getNpcSticker(ctx, "oak");
  await ctx.replyWithSticker(oakSticker.file_id);

  if (!ctx.from?.id) {
    return;
  }

  await setKv("user", ctx.from.id, {
    id: ctx.from.id,
    pokemons: [],
    objects: {
      pokeballs: 0,
    },
  });

  await ctx.reply(
    `<b>${oakSticker.name}:</b> <blockquote><pre>hola eres nuevo. Bienvenido al mundo pokemon, ve a atrapar pokemons, por ahora no necesitas pokebolas</pre></blockquote>`,
    {
      parse_mode: "HTML",
    }
  );

  return (ctx.session.user.isNew = false);
};
