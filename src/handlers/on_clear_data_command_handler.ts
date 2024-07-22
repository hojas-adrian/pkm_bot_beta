import MyContext from "../helpers/context.ts";

import { deleteDatatoSave } from "../helpers/session_actions.ts";

export default async (ctx: MyContext) => {
  deleteDatatoSave(ctx);

  return await ctx.react("👌");
};
