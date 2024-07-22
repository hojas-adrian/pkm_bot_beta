import { Composer } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import catsh from "../menus/catsh.ts";
import pkmListButton from "../menus/pkm_list.ts";
import saveInKVButton from "../menus/save_in_kv.ts";

const composer = new Composer<MyContext>();

composer.use(saveInKVButton, pkmListButton, catsh);

export default composer;
