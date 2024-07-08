import { Composer } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import saveInKV from "../menus/save_in_kv.ts";

const composer = new Composer<MyContext>();

composer.use(saveInKV);

export default composer;
