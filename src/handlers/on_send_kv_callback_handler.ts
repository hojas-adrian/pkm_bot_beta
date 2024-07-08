import {
  isAdmin,
  sendMessageToPokedex,
  sendStickerToPokedex,
} from "../helpers/actions.ts";
import { MyMenuContext } from "../helpers/context.ts";
import { setKv } from "../helpers/kv_actions.ts";
import { deleteDatatoSave, getDatatoSave } from "../helpers/session_actions.ts";
import { getDataString } from "../helpers/utils.ts";

export default async (ctx: MyMenuContext) => {
  if (!isAdmin(ctx)) {
    return await ctx.answerCallbackQuery("no puedes realizar esta accion");
  }

  const data = getDatatoSave(ctx);

  deleteDatatoSave(ctx);

  if (!data) {
    await ctx.answerCallbackQuery("error en la base de datos");
    return ctx.menu.close();
  }

  const saved = await setKv("pkm-basic", data.id, data);

  if (!saved.ok) {
    await ctx.answerCallbackQuery("error en la base de datos");
    return ctx.menu.close();
  }

  const stk = await sendStickerToPokedex(ctx, data.file_id);
  await sendMessageToPokedex(ctx, getDataString(data), stk.message_id);

  await ctx.answerCallbackQuery("datos guardados");
  return ctx.menu.close();
};
