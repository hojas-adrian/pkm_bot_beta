import MyContext from "../helpers/context.ts";
import { delKv } from "../helpers/kv_actions.ts";
import { kv_data } from "../helpers/models.ts";
import { getMatch } from "../helpers/utils.ts";

const kv = await Deno.openKv();

export default async (ctx: MyContext) => {
  const match = getMatch(ctx);

  if (!match) {
    return await ctx.reply("y los datos?");
  }

  const iter = kv.list<kv_data>({ prefix: [match] });
  for await (const res of iter) await delKv(match, res.value.id);
};
