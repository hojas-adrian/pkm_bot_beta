import { NextFunction, Context } from "../deps.ts";

export default (ctx: Context, next: NextFunction) => {
  if (ctx.chat?.type === "supergroup" || ctx.chat?.type === "group") {
    next();
  }
};
