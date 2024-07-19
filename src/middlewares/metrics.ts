import { NextFunction } from "../deps.ts";
import { LOG_CHANNEL_ID } from "../helpers/constants.ts";
import MyContext from "../helpers/context.ts";
import { getKv } from "../helpers/kv_actions.ts";
import { getUserData } from "../helpers/utils.ts";

export default async (ctx: MyContext, next: NextFunction) => {
  if (ctx.chat?.type === "private") {
    const id = ctx.from?.id;
    if (!id) {
      return;
    }

    if (
      !ctx.session.user.isNew ||
      (await getKv("user-data", ctx.from.id)).versionstamp
    ) {
      return await next();
    }

    ctx.api.sendMessage(LOG_CHANNEL_ID, getUserData(ctx.from), {
      parse_mode: "HTML",
    });
  }

  return await next();
};
