import { NextFunction } from "../deps.ts";
import { ADMINS_IDS, SUPER_ADMINS_IDS } from "../helpers/constants.ts";
import MyContext from "../helpers/context.ts";
import { haveId } from "../helpers/utils.ts";

export default (ctx: MyContext, next: NextFunction) => {
  const id = ctx.from?.id;

  if (!id) {
    return;
  }

  return haveId(id, [...ADMINS_IDS, ...SUPER_ADMINS_IDS]) && next();
};
