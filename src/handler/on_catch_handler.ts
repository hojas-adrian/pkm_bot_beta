import { Context } from "../deps.ts";
import { name } from "../helpers/utils.ts";

export default async (ctx: Context) => {
  await ctx.editMessageText(`zigzagon atrapado por ${name(ctx)}`);

  return await ctx.answerCallbackQuery({
    text: "atrapaste un zigzagon salvaje",
  });
};
