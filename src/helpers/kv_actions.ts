import {
  pkm_basic,
  kv_data,
  npc,
  data_params,
  kv_id,
  region_data,
  pkm_list,
} from "./models.ts";

const kv = await Deno.openKv();

export const setKv = async (field: string, id: kv_id, value: kv_data) => {
  return await kv.set([field, id], value);
};

export const delKv = async (field: string, id: kv_id) => {
  await kv.delete([field, id]);
};

export const getKv = async (field: string, id: kv_id) => {
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

export const setRegion = async (id: string, data: region_data) => {
  const response = await setKv("region_data", id, data);

  return response.ok;
};

export const setPkmList = async (id: string, data: pkm_list) => {
  const response = await setKv("pkm_list", id, data);

  return response.ok;
};

export const setAsset = async (data: data_params) => {
  switch (data.type) {
    case "npc":
      return await setNpc(data.data.id, data.data);

    case "pkm":
      return await setPkmBasic(data.data.id, data.data);

    default:
      return false;
  }
};

export const fDellKV = async (match: string) => {
  const iter = kv.list<kv_data>({ prefix: [match] });
  for await (const res of iter) {
    await delKv(match, res.value.id);
  }
};
