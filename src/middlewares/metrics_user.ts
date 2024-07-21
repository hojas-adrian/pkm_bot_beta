import { NextFunction } from "../deps.ts";
import { LOG_CHANNEL_ID } from "../helpers/constants.ts";
import MyContext from "../helpers/context.ts";
import { getUserInfo } from "../helpers/utils.ts";

export default async (ctx: MyContext, next: NextFunction) => {
  if (!ctx.from) {
    return;
  }

  await ctx.api.sendMessage(LOG_CHANNEL_ID, getUserInfo(ctx.from), {
    parse_mode: "HTML",
  });

  await next();
};
