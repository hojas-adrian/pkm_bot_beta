import { haveId } from "./utils.ts";
import { ADMINS_IDS, SUPER_ADMINS_IDS } from "./constants.ts";
import MyContext from "./context.ts";

export const isAdmin = (ctx: MyContext) => {
  const id = ctx.from?.id;

  if (!id) {
    return false;
  }

  return haveId(id, [...ADMINS_IDS, ...SUPER_ADMINS_IDS]);
};

export const isSuperAdmin = (ctx: MyContext) => {
  const id = ctx.from?.id;

  if (!id) {
    return false;
  }

  return haveId(id, SUPER_ADMINS_IDS);
};
