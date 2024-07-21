import { Router } from "../deps.ts";
import MyContext from "../helpers/context.ts";

const router = new Router<MyContext>((ctx) => {
  if (ctx.chat?.type === "private") {
    return "private";
  }

  if (ctx.chat?.type === "group" || ctx.chat?.type === "supergroup") {
    return "group";
  }
});

export default router;
