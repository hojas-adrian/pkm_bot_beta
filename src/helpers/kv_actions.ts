import {
  pkm_basic,
  kv_data,
  npc,
  params_set_functios,
  KVkey,
} from "./models.ts";

const kv = await Deno.openKv();

export const setKv = async (
  field: string,
  id: string | number,
  value: kv_data
) => {
  return await kv.set([field, id], value);
};

export const delKv = async (field: string, id: KVkey) => {
  await kv.delete([field, id]);
};

export const getKv = async (field: string, id: string | number) => {
  return await kv.get<kv_data>([field, id]);
};

export const setPkmBasic = async (id: string, data: pkm_basic) => {
  const response = await setKv("pkm-basic", id, data);

  return response.ok;
};

export const getPkmBasic = async (id: string) => {
  const response = await getKv("pkm-basic", id);

  return response.value as pkm_basic;
};

export const setNpc = async (id: string, data: npc) => {
  const response = await setKv("npc-basic", id, data);

  return response.ok;
};

export const getNpc = async (id: string) => {
  const response = await getKv("npc-basic", id);

  return response.value as npc;
};

export const setAsset = async (data: params_set_functios) => {
  switch (data.type) {
    case "npc":
      return await setNpc(data.data.id, data.data);

    case "pkm":
      return await setPkmBasic(data.data.id, data.data);

    default:
      return false;
  }
};
