import MyContext from "./context.ts";
import { data_params } from "./models.ts";

export const setDatatoSave = (ctx: MyContext, data: data_params) => {
  ctx.session.admin = {
    toSave: data,
  };
};

export const deleteDatatoSave = (ctx: MyContext) => {
  ctx.session.admin = undefined;
};

export const getDatatoSave = (ctx: MyContext) => {
  return ctx.session.admin?.toSave || false;
};
