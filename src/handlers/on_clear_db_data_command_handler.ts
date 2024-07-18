import MyContext from "../helpers/context.ts";
import { fDellKV } from "../helpers/kv_actions.ts";

import { getMatch } from "../helpers/utils.ts";

export default async (ctx: MyContext) => {
  const match = getMatch(ctx);

  if (!match) {
    return await ctx.reply("y los datos?");
  }

  await fDellKV(match);

  return await ctx.reply("datos borrados");
};
