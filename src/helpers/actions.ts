import { haveId, sendMessage, sendSticker } from "./utils.ts";
import { ADMINS_IDS, POKEDEX, SUPER_ADMINS_IDS } from "./constants.ts";
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

export const sendStickerToPokedex = async (ctx: MyContext, sticker: string) => {
  return await sendSticker(ctx, POKEDEX, sticker);
};

export const sendMessageToPokedex = async (
  ctx: MyContext,
  message: string,
  reply?: number
) => {
  return await sendMessage(ctx, POKEDEX, message, reply);
};
