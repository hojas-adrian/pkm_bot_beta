import { Context } from "../deps.ts";

export const name = (ctx: Context) => {
  return ctx.from?.username
    ? `@${ctx.from?.username}`
    : ctx.from?.first_name || "";
};
