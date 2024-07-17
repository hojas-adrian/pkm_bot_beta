import { Composer } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import isAdmin from "../middlewares/is_admin.ts";
import isSuperAdmin from "../middlewares/is_super_admin.ts";
import onAssetCommandHandler from "../handlers/on_add_asset_command_handler.ts";
import onClearDataCommandHandler from "../handlers/on_clear_data_command_handler.ts";
import onDeleteAsset from "../handlers/ch_on_delete_asset.ts";
import onClearDBDataCommandHandler from "../handlers/on_clear_db_data_command_handler.ts";
import onInfoCommandHandler from "../handlers/on_info_command_handler.ts";
import onStarCommandHandler from "../handlers/on_start_command_handler.ts";

const composer = new Composer<MyContext>();
// admin commands
composer.command("addasset", isAdmin, onAssetCommandHandler);
composer.command("cleardata", isAdmin, onClearDataCommandHandler);
composer.command("deleteasset", isAdmin, onDeleteAsset);
composer.command("info", isAdmin, onInfoCommandHandler);
// super admin commands
composer.command("clearDB", isSuperAdmin, onClearDBDataCommandHandler);
// basic commands
composer.command("start", onStarCommandHandler);

export default composer;
