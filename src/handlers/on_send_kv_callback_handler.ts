import {
  isAdmin,
  sendMessageToPokedex,
  sendStickerToPokedex,
} from "../helpers/actions.ts";
import { MyMenuContext } from "../helpers/context.ts";
import { setAsset } from "../helpers/kv_actions.ts";
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

  const saved = await setAsset(data);

  if (!saved) {
    await ctx.answerCallbackQuery("error en la base de datos");
    return ctx.menu.close();
  }

  await ctx.reply("enviado correctamente", {
    reply_parameters: {
      message_id: ctx.callbackQuery?.message?.message_id || 0,
    },
  });

  const stk = await sendStickerToPokedex(ctx, data.data.file_id);
  await sendMessageToPokedex(ctx, getDataString(data), stk.message_id);

  await ctx.answerCallbackQuery("datos guardados");
  return ctx.menu.close();
};
