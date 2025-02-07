import {
  pkm_basic,
  kv_data,
  npc,
  data_params,
  kv_id,
  region_data,
  pkm_list,
  chat_data,
  user_data,
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

export const getRegion = async (id: string) => {
  const response = await getKv("region_data", id);

  return response.value as region_data;
};

export const setPkmList = async (id: string, data: pkm_list) => {
  const response = await setKv("pkm_list", id, data);

  return response.ok;
};

export const getPkmList = async (id: string) => {
  const response = await getKv("pkm_list", id);

  return response.value as pkm_list;
};

export const setChatData = async (id: number, data: chat_data) => {
  const response = await setKv("chat_data", id, data);

  return response.ok;
};

export const getChatData = async (id: number) => {
  const response = await getKv("chat_data", id);

  return response.value as chat_data;
};

export const setUserData = async (id: number, data: user_data) => {
  const response = await setKv("user_data", id, data);

  return response.ok;
};

export const getUserData = async (id: number) => {
  const response = await getKv("user_data", id);

  return response.value as user_data;
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

export const getAll = async (prefix: string) => {
  const iter = kv.list<kv_data>({ prefix: [prefix] });
  const data = [];
  for await (const res of iter) {
    const item = res.value;
    data.push(item);
  }

  return data;
};

export const getAllRegions = async () => {
  const response = await getAll("region_data");

  return response as region_data[];
};

export const fDellKV = async (match: string) => {
  const iter = kv.list<kv_data>({ prefix: [match] });
  for await (const res of iter) {
    await delKv(match, res.value.id);
  }
};
