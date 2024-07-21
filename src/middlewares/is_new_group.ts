import { NextFunction } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import { getChatData } from "../helpers/kv_actions.ts";

export default async (ctx: MyContext, next: NextFunction) => {
  if (!ctx.chat?.id) {
    return;
  }

  if (ctx.session.group.type || (await getChatData(ctx.chat?.id))) {
    return;
  }

  return await next();
};
