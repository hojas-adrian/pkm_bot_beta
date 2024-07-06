import { Composer } from "../deps.ts";
import { catsh } from "../keyboards/keyboards.ts";

const composer = new Composer();

const inGroup = composer.filter((ctx) => {
  return ctx.chat?.type === "group" || ctx.chat?.type === "supergroup";
});

inGroup.use(async (ctx) => {
  await ctx.replyWithSticker(
    "https://images.gameinfo.io/pokemon/256/p263f345.webp"
  );
  await ctx.reply("zigzagon salvaje ha aparecido", {
    reply_markup: catsh,
  });
});

export default composer;
