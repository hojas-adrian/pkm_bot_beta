import MyContext from "./context.ts";

export const name = (ctx: MyContext) =>
  ctx.from?.username ? `@${ctx.from?.username}` : ctx.from?.first_name || "";

export const haveId = (id: number, idList: string[] | number[]) =>
  idList.some((adminId) => +adminId === id);
