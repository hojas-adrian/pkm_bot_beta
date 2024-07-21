import MyContext from "../helpers/context.ts";
import { getPkmBasic, getPkmList, setChatData } from "../helpers/kv_actions.ts";
import { kv_data, region_data } from "../helpers/models.ts";
import { pkm_cache } from "../helpers/models.ts";

const kv = await Deno.openKv();

export default async (ctx: MyContext) => {
  if (!ctx.myChatMember || !ctx.chat) {
    return;
  }

  if (ctx.myChatMember.new_chat_member.status === "member") {
    const randomIndex = (length: number) => {
      return Math.floor(Math.random() * length);
    };

    const iter = kv.list<kv_data>({ prefix: ["region_data"] });
    const regions = [];
    for await (const res of iter) {
      const region = res.value as region_data;
      regions.push(region);
    }

    const region = regions[randomIndex(regions.length)];

    const place = region.places[randomIndex(region.places.length)];

    const pkmlist = await getPkmList(place);

    console.log(pkmlist.data);

    const chat = {
      id: ctx.chat.id,
      region: region.id,
      place: place,
    };

    await setChatData(chat.id, chat);

    await ctx.reply(`${ctx.chat.title}:\nRegion: ${region.name}`);

    ctx.session.group.type = {
      zone: region.id,
      biome: place,
    };

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
  }
};
