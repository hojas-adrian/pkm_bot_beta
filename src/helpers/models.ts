export type pkm_basic = {
  id: string;
  file_id: string;
  name: string;
  freq: number;
  sex?: "male" | "female";
};

export type kv_data = pkm_basic | npc;

export type npc = {
  id: string;
  file_id: string;
  name: string;
};

export type input = pkm_input | npc_input;

export type pkm_input = [
  "pkm",
  string,
  string,
  string,
  "male" | "female" | undefined
];

export type npc_input = ["npc", string, string];

export type params_pkm_basic = {
  type: "pkm";
  data: pkm_basic;
};

export type params_npc = {
  type: "npc";
  data: npc;
};

export type params_set_functios = params_npc | params_pkm_basic;
