import { params_set_functios } from "./models.ts";

export type SessionData = {
  admin?: SessionAdmin;
  pokedex: SessionPokedex;
};

export type SessionAdmin = {
  toSave: params_set_functios;
};

export const initialAdmin = () => {
  return undefined;
};

type SessionPokedex = undefined;

export const initialPokedex = (): SessionPokedex => {
  return;
};
