import { npc, params_set_functios } from "./models.ts";

export type SessionData = {
  admin?: SessionAdmin;
  user: SessionUser;
  group: SessionGroup;
};

export type SessionAdmin = {
  toSave: params_set_functios;
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
  };
};

export const initialGroup = (): SessionGroup => {
  return {};
};
