import { NextFunction } from "../deps.ts";
import { isAdmin } from "../helpers/checkers.ts";
import MyContext from "../helpers/context.ts";

export default (ctx: MyContext, next: NextFunction) => {
  return isAdmin(ctx) && next();
};
