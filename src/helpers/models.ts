export type kv_data =
  | pkm_basic
  | npc
  | user_data
  | region_data
  | pkm_list
  | chat_data;

export type kv_id = number | string;

export type pkm_basic = {
  id: string;
  file_id: string;
  name: string;
  sex?: "male" | "female";
};

export type pkm_cache = pkm_basic & {
  prob: number;
};

export type npc = {
  id: string;
  file_id: string;
  name: string;
};

export type user_data = {
  id: number;
  pokemons: pkm_basic[];
  objects: {
    pokeballs?: number;
  };
};

export type chat_data = {
  id: number;
  region: string;
  place: string;
};

export type region_data = {
  id: string;
  name: string;
  places: string[];
};

export type pkm_list = {
  id: string;
  place: string;
  data: {
    id: string;
    where: string;
    freq: number;
  }[];
};

export type match = pkm_basic_match | npc_match;

export type pkm_basic_match = [
  "pkm",
  string,
  string,
  "male" | "female" | undefined
];

export type npc_match = ["npc", string, string];

export type data_params = params_npc | params_pkm_basic;

export type params_pkm_basic = {
  type: "pkm";
  data: pkm_basic;
};

export type params_npc = {
  type: "npc";
  data: npc;
};
