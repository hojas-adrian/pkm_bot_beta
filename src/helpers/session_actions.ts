import MyContext from "./context.ts";
import { pkm_basic } from "./models.ts";

export const deleteDatatoSave = (ctx: MyContext) => {
  ctx.session.admin = undefined;
};

export const getDataMessageId = (ctx: MyContext) => {
  return ctx.session.admin?.toSave.message_id || false;
};

export const getDatatoSave = (ctx: MyContext) => {
  return ctx.session.admin?.toSave.data || false;
};

export const setDatatoSave = (
  ctx: MyContext,
  data: pkm_basic,
  messageId: number
) => {
  ctx.session.admin = {
    toSave: {
      message_id: messageId,
      data,
    },
  };
};
