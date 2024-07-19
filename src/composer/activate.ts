import { Composer } from "../deps.ts";
import { LOG_CHANNEL_ID } from "../helpers/constants.ts";
import MyContext from "../helpers/context.ts";
import { getChatData, getPkmList, setChatData } from "../helpers/kv_actions.ts";
import { kv_data, region_data } from "../helpers/models.ts";
import { getChatInfo } from "../helpers/utils.ts";
import is_chat_me_member from "../middlewares/is_chat_me_member.ts";

const kv = await Deno.openKv();
const composer = new Composer<MyContext>();

composer.on("my_chat_member", is_chat_me_member, async (ctx) => {
  console.log(ctx.myChatMember.new_chat_member.status);

  if (ctx.myChatMember.new_chat_member.status === "member") {
    const randomIndex = (length: number) => {
      return Math.floor(Math.random() * length);
    };

    if (!ctx.session.group.type || (await getChatData(ctx.chat.id))) {
      const chatData = await ctx.api.getChat(ctx.chat.id);

      const iter = kv.list<kv_data>({ prefix: ["region_data"] });
      const regions = [];
      for await (const res of iter) {
        const region = res.value as region_data;
        regions.push(region);
      }

      const region = regions[randomIndex(regions.length)];

      const place = region.places[randomIndex(region.places.length)];

      const pkmlist = await getPkmList(place);

      console.log(place);

      console.log(pkmlist.data);

      const chat = {
        id: ctx.chat.id,
        region: region.id,
        place: place,
      };

      await setChatData(chat.id, chat);

      await ctx.reply(`${ctx.chat.first_name}:\nRegion: ${region.name}`);
      await ctx.api.sendMessage(
        LOG_CHANNEL_ID,
        `${getChatInfo(chatData)}\n\n#${region.id} #${place}`,
        {
          parse_mode: "HTML",
        }
      );

      ctx.session.group.type = {
        zone: region.id,
        biome: place,
      };
    }
  }
});

export default composer;
