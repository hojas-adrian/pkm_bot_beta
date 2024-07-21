import { NextFunction, Context } from "../deps.ts";

export default async (ctx: Context, next: NextFunction) => {
  if (ctx.chat?.type === "private") {
    await next();
  }
};
