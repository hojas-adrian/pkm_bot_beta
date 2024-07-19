export const VERSION = [0, 0, 0];

export const BOT_TOKEN = Deno.env.get("BOT_TOKEN") as string;
export const ASSETS_CHANNEL_ID = Deno.env.get("ASSETS_CHANNEL") as string;
export const LOG_CHANNEL_ID = Deno.env.get("LOG_CHANNEL_ID") as string;
export const SUPER_ADMINS_IDS = (
  Deno.env.get("SUPER_ADMIN_ID") as string
).split(" ");
export const STAFF_GROUP_ID = Deno.env.get("STAFF_GROUP") as string;
export const ADMINS_IDS = (Deno.env.get("ADMIN_ID") as string).split(" ");

export const REGIONS = {
  kanto: {
    name: "Kanto",
    places: {
      route1: {
        name: "Ruta 1",
        pkm: [
          {
            id: "pm16",
            where: "grass",
            freq: 40,
          },
          {
            id: "pm43",
            where: "grass",
            freq: 30,
          },
          {
            id: "pm69",
            where: "grass",
            freq: 30,
          },
          {
            id: "pm19",
            where: "grass",
            freq: 30 / 2,
          },
          {
            id: "pm19.g2",
            where: "grass",
            freq: 30 / 2,
          },
        ],
      },
    },
  },
  // Archi7: {},
  // Johto: {},
  // Hoenn: {},
  // Sinnoh: {},
  // Teselia: {},
  // Kalos: {},
  // Alola: {},
  // Galar: {},
  // Paldea: {},
  // Noroteo: {},
};
