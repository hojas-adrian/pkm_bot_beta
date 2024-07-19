import { data_params, pkm_basic } from "./models.ts";

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

  cache?: {
    npc?: {
      [key: string]: {
        name: string;
        file_id: string;
      };
    };
    pkm?: pkm_basic[];
  };
};

export const initialGroup = (): SessionGroup => {
  return {};
};

export type SessionBeta = {
  enabled: boolean;
};

export const initialBeta = () => {
  return {
    enabled: false,
  };
};
