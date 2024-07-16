import { InputFile } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import { setDatatoSave } from "../helpers/session_actions.ts";
import { addStickerId, getData, getDataString } from "../helpers/utils.ts";
import greet from "../menus/save_in_kv.ts";

export default async (ctx: MyContext) => {
  if (!ctx.message?.reply_to_message?.document?.file_id) {
    return await ctx.reply("responde a un documento comepinga");
  }

  if (ctx.match === "" || typeof ctx.match !== "string") {
    return await ctx.reply("Y los datos? :)");
  }

  if (ctx.session.admin?.toSave) {
    return await ctx.reply("ya hay un pokemon en proceso");
  }

  const data = getData(ctx.match);

  if (!data) {
    return ctx.reply("algo hiciste mal");
  }

  const file = await ctx.api.getFile(
    ctx.message?.reply_to_message?.document?.file_id
  );
  const url = new URL(file.getUrl());
  const sticker = await ctx.replyWithSticker(new InputFile(url));

  const file_id = sticker.sticker.file_id;

  const output = addStickerId(data, file_id);

  await ctx.reply(getDataString(output), {
    reply_markup: greet,
  });

  setDatatoSave(ctx, output);
};
