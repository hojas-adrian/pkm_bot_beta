import { NextFunction } from "../deps.ts";
import MyContext from "../helpers/context.ts";

export default async (ctx: MyContext, next: NextFunction) => {
  ctx.react("☃");

  if (Math.random() < 0.25) {
    await next();
  }
};
