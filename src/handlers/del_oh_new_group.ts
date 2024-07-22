import MyContext from "../helpers/context.ts";
import {
  getAllRegions,
  getPkmBasic,
  getPkmList,
  setChatData,
} from "../helpers/kv_actions.ts";
import { pkm_cache } from "../helpers/models.ts";
import { randomIndex } from "../helpers/utils.ts";

export default async (ctx: MyContext) => {
  if (!ctx.chat) {
    return;
  }

  const regions = await getAllRegions();

  const region = regions[randomIndex(regions.length)];
  const place = region.places[randomIndex(region.places.length)];

  const pkmlist = await getPkmList(place);

  const chat = {
    id: ctx.chat.id,
    region: region.id,
    place: place,
  };

  await setChatData(chat.id, chat);

  const pkmDatatoCache = await Promise.all(
    pkmlist.data.map(async (pkm) => {
      return await getPkmBasic(pkm.id);
    })
  );

  const cache = pkmlist.data.reduce(
    (y: { total: number; pkm: pkm_cache[] }, x, i) => {
      const acc = y.total + x.freq;

      console.log(pkmDatatoCache);

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
