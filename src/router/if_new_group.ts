import { Router } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import { getChatData } from "../helpers/kv_actions.ts";

const router = new Router<MyContext>(async (ctx) => {
  if (!ctx.chat) {
    return;
  }

  if (!ctx.session.group.cache.zone && !(await getChatData(ctx.chat.id))) {
    return "isNew";
  }

  return "isNtNew";
});

export default router;
