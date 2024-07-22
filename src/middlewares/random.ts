import { NextFunction } from "../deps.ts";
import MyContext from "../helpers/context.ts";

export default async (ctx: MyContext, next: NextFunction) => {
  console.log("here");

  if (Math.random() < 0.25) {
    await next();
  }
};
