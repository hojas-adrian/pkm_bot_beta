import MyContext from "./context.ts";
import { pkm_basic } from "./models.ts";
import { SessionAdmin } from "./session.ts";

export const getCurrentoSave = (ctx: MyContext) => {
  return ctx.session.admin?.toSave.current;
};

export const initAdmin = (ctx: MyContext) => {
  ctx.session.admin = {
    toSave: { current: undefined, data: {} },
  };
};

export const toSave = (ctx: MyContext, data: pkm_basic, id: string) => {
  if (!ctx.session.admin) {
    initAdmin(ctx);
  }

  (ctx.session.admin as SessionAdmin).toSave.data[id] = data;
  (ctx.session.admin as SessionAdmin).toSave.current = id;
};
