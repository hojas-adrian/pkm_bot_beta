export type pkm_basic = {
  id: string;
  file_id: string;
  name: string;
  freq: number;
  sex?: "male" | "female";
};

export type kv_data = pkm_basic;
