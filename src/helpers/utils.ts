import MyContext from "./context.ts";
import { pkm_basic } from "./models.ts";

export const name = (ctx: MyContext) =>
  ctx.from?.username ? `@${ctx.from?.username}` : ctx.from?.first_name || "";

export const haveId = (id: number, idList: string[] | number[]) =>
  idList.some((adminId) => +adminId === id);

export const sendMessage = async (
  ctx: MyContext,
  toChatId: string,
  message: string,
  replyMessageId?: number
) =>
  await ctx.api.sendMessage(toChatId, message, {
    parse_mode: "HTML",
    reply_parameters: {
      message_id: replyMessageId || 0,
    },
  });

export const sendSticker = async (
  ctx: MyContext,
  toChatId: string,
  sticker: string,
  replyMessageId?: number
) =>
  await ctx.api.sendSticker(toChatId, sticker, {
    reply_parameters: {
      message_id: replyMessageId || 0,
    },
  });

export const getDataString = (data: pkm_basic) => {
  return `name: ${data.name} ${
    data.sex ? (data.sex === "male" ? "♂" : "♀") : ""
  }\nfrecuencia: ${data.freq}\nid: ${data.file_id}\n\n#${data.id}`;
};
