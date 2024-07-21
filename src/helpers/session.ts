import { data_params, pkm_cache } from "./models.ts";

export type SessionData = {
  admin?: SessionAdmin;
  user: SessionUser;
  group: SessionGroup;
  beta: SessionBeta;
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
  type?: {
    zone: string;
    biome: string;
  };

  cache: {
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

export type SessionBeta = {
  enabled: boolean;
};

export const initialBeta = () => {
  return {
    enabled: false,
  };
};
