import { InputFile } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import { setDatatoSave } from "../helpers/session_actions.ts";
import { getDataString } from "../helpers/utils.ts";
import greet from "../menus/save_in_kv.ts";

export default async (ctx: MyContext) => {
  if (!ctx.message?.reply_to_message?.document?.file_id) {
    return await ctx.reply("responde a un documento comepinga");
  }

  if (ctx.match === "" || typeof ctx.match !== "string") {
    return await ctx.reply("Y los datos? :)");
  }

  const [id, name, freq, sex] = ctx.match.split(" ") as [
    string,
    string,
    string,
    "male" | "female" | undefined
  ];

  if (ctx.session.admin?.toSave) {
    return await ctx.reply("ya hay un pokemon en proceso");
  }

  const file = await ctx.api.getFile(
    ctx.message?.reply_to_message?.document?.file_id
  );
  const url = new URL(file.getUrl());
  const sticker = await ctx.replyWithSticker(new InputFile(url));

  const file_id = sticker.sticker.file_id;

  const data = {
    id,
    name,
    file_id,
    freq: +freq,
    sex,
  };

  const msg = await ctx.reply(getDataString(data), {
    reply_markup: greet,
  });

  setDatatoSave(ctx, data, msg.message_id);
};
