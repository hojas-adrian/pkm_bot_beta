import { NextFunction } from "../deps.ts";
import { LOG_CHANNEL_ID } from "../helpers/constants.ts";
import MyContext from "../helpers/context.ts";
import { getChatInfo } from "../helpers/utils.ts";

export default async (ctx: MyContext, next: NextFunction) => {
  if (!ctx.chat) {
    return;
  }
  const chatData = await ctx.api.getChat(ctx.chat.id);

  await ctx.api.sendMessage(LOG_CHANNEL_ID, getChatInfo(chatData), {
    parse_mode: "HTML",
  });

  await next();
};
