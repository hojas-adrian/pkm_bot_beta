import { session } from "../deps.ts";

export type SessionData = {
  pizzaCount: number;
};

function initial(): SessionData {
  return { pizzaCount: 0 };
}

export default session({ initial });
