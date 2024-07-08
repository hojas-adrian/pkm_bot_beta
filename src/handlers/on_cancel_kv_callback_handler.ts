import { isAdmin } from "../helpers/actions.ts";
import { MyMenuContext } from "../helpers/context.ts";
import { deleteDatatoSave } from "../helpers/session_actions.ts";

export default async (ctx: MyMenuContext) => {
  if (!isAdmin(ctx)) {
    return await ctx.answerCallbackQuery("no puedes realizar esta accion");
  }

  deleteDatatoSave(ctx);

  await ctx.answerCallbackQuery("Datos borrados");

  return ctx.menu.close();
};
