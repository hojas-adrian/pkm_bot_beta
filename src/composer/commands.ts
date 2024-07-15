import { Composer } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import isAdmin from "../middlewares/is_admin.ts";
import onAssetCommandHandler from "../handlers/on_add_asset_command_handler.ts";
import onClearDataCommandHandler from "../handlers/on_clear_data_command_handler.ts";
import onInfoCommandHandler from "../handlers/on_info_command_handler.ts";

const composer = new Composer<MyContext>();

composer.command("addasset", isAdmin, onAssetCommandHandler);
composer.command("cleardata", isAdmin, onClearDataCommandHandler);
composer.command("info", isAdmin, onInfoCommandHandler);

export default composer;
