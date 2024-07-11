import MyContext from "../helpers/context.ts";
import { getBotData, getChatData, getUserData } from "../helpers/utils.ts";

export default async (ctx: MyContext) => {
  if (ctx.message?.reply_to_message) {
    const user = ctx.message.reply_to_message.from;

    return user && (await ctx.reply(getUserData(user), { parse_mode: "HTML" }));
  }

  const group = ctx.chat;

  if (!group) {
    return getBotData(ctx);
  }

  if (group.type === "private") {
    return await ctx.reply(getBotData(ctx), { parse_mode: "HTML" });
  }

  const chatData = await ctx.api.getChat(group.id);

  return await ctx.reply(`${getChatData(chatData)}`, { parse_mode: "HTML" });
};
