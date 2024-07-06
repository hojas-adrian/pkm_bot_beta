import { pkm_basic } from "./models.ts";

const kv = await Deno.openKv();

export const setKv = async (
  field: string,
  id: string,
  value: pkm_basic | `${string}-${string}-${string}-${string}-${string}`
) => {
  await kv.set([field, id], value);
};

export const delKv = async (field: string, id: string) => {
  await kv.delete([field, id]);
};

export const getKv = async (field: string, id: string) => {
  return await kv.get<pkm_basic>([field, id]);
};
