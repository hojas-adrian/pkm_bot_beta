import { pkm_basic, kv_data } from "./models.ts";

const kv = await Deno.openKv();

export const setKv = async (
  field: string,
  id: string,
  value: pkm_basic | `${string}-${string}-${string}-${string}-${string}`
) => {
  return await kv.set([field, id], value);
};

export const delKv = async (field: string, id: string | number) => {
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
