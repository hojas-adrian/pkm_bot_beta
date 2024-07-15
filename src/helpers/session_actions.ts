import MyContext from "./context.ts";
import { pkm_basic } from "./models.ts";

export const deleteDatatoSave = (ctx: MyContext) => {
  ctx.session.admin = undefined;
};

export const getDatatoSave = (ctx: MyContext) => {
  return ctx.session.admin?.toSave || false;
};

export const setDatatoSave = (ctx: MyContext, data: pkm_basic) => {
  ctx.session.admin = {
    toSave: data,
  };
};
