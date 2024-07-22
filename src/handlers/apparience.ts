import MyContext from "../helpers/context.ts";
import { getPkmBasic, getPkmList } from "../helpers/kv_actions.ts";
import { pkm_cache } from "../helpers/models.ts";
import { getZoneName } from "../helpers/utils.ts";
import catsh from "../menus/catsh.ts";

export default async (ctx: MyContext) => {
  await cache(ctx);
};

const cache = async (ctx: MyContext) => {
  if (!ctx.chat) {
    return;
  }
  if (!ctx.session.group.cache.pkm) {
    await save(ctx);
  }

  if (!ctx.session.group.cache.pkm) {
    return;
  }

  const prob = getProb(ctx.session.group.cache.pkm.total);

  const arr = ctx.session.group.cache.pkm.pkm.find((el) => {
    return el.prob >= prob;
  });

  if (!arr?.file_id) {
    return;
  }

  await ctx.replyWithSticker(arr.file_id);

  await ctx.reply(`${arr?.name} salvaje ha aparecido`, {
    reply_markup: catsh,
  });
};

const save = async (ctx: MyContext) => {
  const zone = await getZoneName(ctx);

  const place = zone?.place;

  if (!place) {
    return;
  }

  const pkmlist = await getPkmList(place);

  const pkmDatatoCache = await Promise.all(
    pkmlist.data.map(async (pkm) => {
      return await getPkmBasic(pkm.id);
    })
  );

  const cache = pkmlist.data.reduce(
    (y: { total: number; pkm: pkm_cache[] }, x, i) => {
      const acc = y.total + x.freq;

      const pkm: pkm_cache = {
        ...pkmDatatoCache[i],
        prob: acc,
      };
      return {
        pkm: [...y.pkm, pkm],
        total: acc,
      };
    },

    {
      pkm: [],
      total: 0,
    }
  );

  ctx.session.group.cache.pkm = cache;
};

const getProb = (total: number) => {
  return total - Math.random() * total;
};
