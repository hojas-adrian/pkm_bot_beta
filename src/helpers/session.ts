import { data_params, pkm_cache } from "./models.ts";

export type SessionData = {
  admin?: SessionAdmin;
  user: SessionUser;
  group: SessionGroup;
};

export type SessionAdmin = {
  toSave: data_params;
};

export const initialAdmin = () => {
  return undefined;
};

type SessionUser = {
  isNew: boolean;
};

export const initialUser = (): SessionUser => {
  return {
    isNew: true,
  };
};

export type SessionGroup = {
  cache: {
    zone?: {
      name: string;
      id: string;
      place: string;
    };
    npc?: {
      [key: string]: {
        name: string;
        file_id: string;
      };
    };
    pkm?: {
      total: number;
      pkm: pkm_cache[];
    };
  };
};

export const initialGroup = (): SessionGroup => {
  return { cache: {} };
};
