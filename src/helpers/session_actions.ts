import MyContext from "./context.ts";
import { params_set_functios } from "./models.ts";

export const deleteDatatoSave = (ctx: MyContext) => {
  ctx.session.admin = undefined;
};

export const getDatatoSave = (ctx: MyContext) => {
  return ctx.session.admin?.toSave || false;
};

export const setDatatoSave = (ctx: MyContext, data: params_set_functios) => {
  ctx.session.admin = {
    toSave: data,
  };
};
