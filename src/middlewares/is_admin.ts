import { NextFunction } from "../deps.ts";
import { isAdmin } from "../helpers/actions.ts";
import MyContext from "../helpers/context.ts";

export default async (ctx: MyContext, next: NextFunction) => {
  return isAdmin(ctx) && (await next());
};
