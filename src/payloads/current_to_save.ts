import MyContext from "../helpers/context.ts";
import { getDatatoSave } from "../helpers/session_actions.ts";

export default (ctx: MyContext) => {
  const payload = getDatatoSave(ctx);

  if (!payload) {
    return "";
  }

  return payload.id;
};
