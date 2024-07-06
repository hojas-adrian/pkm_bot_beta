export const VERSION = [0, 0, 0];

export const BOT_TOKEN = Deno.env.get("BOT_TOKEN") as string;
export const POKEDEX = Deno.env.get("POKEDEX") as string;
export const LOG_CHANNEL_ID = Deno.env.get("LOG_CHANNEL_ID") as string;
export const SUPER_ADMINS_IDS = (Deno.env.get("ADMIN_ID") as string).split(" ");
export const ADMINS_IDS = (Deno.env.get("ADMIN_ID") as string).split(" ");
