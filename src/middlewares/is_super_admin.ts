import { NextFunction } from "../deps.ts";
import { isSuperAdmin } from "../helpers/actions.ts";
import MyContext from "../helpers/context.ts";

export default (ctx: MyContext, next: NextFunction) => {
  return isSuperAdmin(ctx) && next();
};
