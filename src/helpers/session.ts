import { pkm_basic } from "./models.ts";

export type SessionData = {
  admin?: SessionAdmin;
  pokedex: SessionPokedex;
};

export type SessionAdmin = {
  toSave: {
    current: string | undefined;
    data: { [key: string]: pkm_basic };
  };
};

export const initialAdmin = () => {
  return undefined;
};

type SessionPokedex = undefined;

export const initialPokedex = (): SessionPokedex => {
  return;
};
