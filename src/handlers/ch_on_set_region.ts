import { REGIONS } from "../helpers/constants.ts";
import MyContext from "../helpers/context.ts";
import { setPkmList, setRegion } from "../helpers/kv_actions.ts";

export default async (ctx: MyContext) => {
  for (const key in REGIONS) {
    const typedKey = key as keyof typeof REGIONS;

    const placesData = REGIONS[typedKey].places;

    const placesName = [];

    for (const key in placesData) {
      const typedKey = key as keyof typeof placesData;
      placesName.push(typedKey);

      await setPkmList(typedKey, {
        id: typedKey,
        place: placesData[typedKey].name,
        data: placesData[typedKey].pkm,
      });
    }

    await setRegion(typedKey, {
      id: typedKey,
      name: REGIONS[typedKey].name,
      places: placesName,
    });
  }

  await ctx.reply("datos enviados");
};
