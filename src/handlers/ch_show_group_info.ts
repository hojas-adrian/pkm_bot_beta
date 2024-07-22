import MyContext from "../helpers/context.ts";
import { getZoneName } from "../helpers/utils.ts";

export default async (ctx: MyContext) => {
  await ctx.reply(`${ctx.chat?.title} [${(await getZoneName(ctx))?.name}]`);
};
