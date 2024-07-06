import { NextFunction, Context } from "../deps.ts";
import { ADMINS_IDS, SUPER_ADMINS_IDS } from "../helpers/constants.ts";

export default (ctx: Context, next: NextFunction) => {
  for (const adminId of [...ADMINS_IDS, ...SUPER_ADMINS_IDS]) {
    if (ctx.from?.id === +adminId) {
      return next();
    }
  }
};
