import { NextFunction } from "../deps.ts";
import { SUPER_ADMINS_IDS } from "../helpers/constants.ts";
import MyContext from "../helpers/context.ts";
import { haveId } from "../helpers/utils.ts";

export default (ctx: MyContext, next: NextFunction) => {
  const id = ctx.from?.id;

  if (!id) {
    return;
  }

  return haveId(id, SUPER_ADMINS_IDS) && next();
};
