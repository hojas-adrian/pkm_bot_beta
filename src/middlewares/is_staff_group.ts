import { NextFunction, Context } from "../deps.ts";
import { STAFF_GROUP_ID } from "../helpers/constants.ts";

export default async (ctx: Context, next: NextFunction) => {
  if (ctx.chat?.id === +STAFF_GROUP_ID) {
    await next();
  }
};
