import { InputFile } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import { SessionAdmin } from "../helpers/session.ts";
import { initAdmin, toSave } from "../helpers/session_connector.ts";

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

  if (!ctx.session.admin) {
    initAdmin(ctx);
  }

  if ((ctx.session.admin as SessionAdmin).toSave.data[id]) {
    return await ctx.reply("ya hay un pokemon con este id");
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

  toSave(ctx, data, id);

  await ctx.reply(
    `name: ${data.name} ${
      data.sex ? (sex === "male" ? "♂" : "♀") : ""
    }\nfrecuencia: ${data.freq}\nid: ${data.file_id}\n\n#${data.id}`
  );
};
