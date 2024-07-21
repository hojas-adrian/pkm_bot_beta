import { Router } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import { getUserData } from "../helpers/kv_actions.ts";

const router = new Router<MyContext>(async (ctx) => {
  if (!ctx.from) {
    return;
  }

  if (!ctx.session.user.isNew || (await getUserData(ctx.from.id))) {
    return "isNtNew";
  }

  return "isNew";
});

export default router;
