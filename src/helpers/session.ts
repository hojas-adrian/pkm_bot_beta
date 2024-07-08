import { pkm_basic } from "./models.ts";

export type SessionData = {
  admin?: SessionAdmin;
  pokedex: SessionPokedex;
};

export type SessionAdmin = {
  toSave: {
    message_id: number | undefined;
    data: pkm_basic | undefined;
  };
};

export const initialAdmin = () => {
  return undefined;
};

type SessionPokedex = undefined;

export const initialPokedex = (): SessionPokedex => {
  return;
};
