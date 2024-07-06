import { InputFile } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import { getKv, setKv } from "../helpers/kv_connector.ts";

export default async (ctx: MyContext) => {
  if (!ctx.message?.reply_to_message?.document?.file_id) {
    return await ctx.reply("responde a un documento comepinga");
  }

  if (ctx.match === "" || typeof ctx.match !== "string") {
    return await ctx.reply("Y los datos? :)");
  }

  const file = await ctx.api.getFile(
    ctx.message?.reply_to_message?.document?.file_id
  );
  const url = new URL(file.getUrl());
  const sticker = await ctx.replyWithSticker(new InputFile(url));

  const [file_id, id, name, freq, sex] = [
    sticker.sticker.file_id,
    ...(ctx.match.split(" ") as [
      string,
      string,
      string,
      "male" | "female" | undefined
    ]),
  ];

  await setKv("pkm_basic", id, {
    id,
    name,
    file_id,
    freq: +freq,
    sex,
  });

  await setKv("db_version", "", crypto.randomUUID());

  const val = await getKv("pkm_basic", id);

  const data = val.value;

  if (!data) {
    return await ctx.reply("Los datos no estan guardados");
  }

  await ctx.reply(
    `name: ${data.name} ${
      data.sex ? (sex === "male" ? "♂" : "♀") : ""
    }\nfrecuencia: ${data.freq}\nid: ${data.file_id}\n\n#${data.id}`
  );
};
