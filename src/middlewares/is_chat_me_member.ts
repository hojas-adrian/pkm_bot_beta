import { NextFunction, Context } from "../deps.ts";

export default async (ctx: Context, next: NextFunction) => {
  if (ctx.myChatMember?.new_chat_member.user.id === ctx.me.id) {
    await next();
  }
};
