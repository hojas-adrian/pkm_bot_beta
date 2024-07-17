import { MyMenuContext } from "../helpers/context.ts";

export default async (ctx: MyMenuContext) => {
  return await ctx.answerCallbackQuery({
    text: "Esta version es beta",
    show_alert: true,
  });
};
