import { NextFunction, Context } from "../deps.ts";

export default async (ctx: Context, next: NextFunction) => {
  if (ctx.myChatMember?.new_chat_member.status === "member") {
    await next();
  }
};
