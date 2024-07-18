import { Composer } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import isStaffGroup from "../middlewares/is_staff_group.ts";
import isAdmin from "../middlewares/is_admin.ts";
import isSuperAdmin from "../middlewares/is_super_admin.ts";
import onAddAsset from "../handlers/on_add_asset_command_handler.ts";
import onClearAsset from "../handlers/on_clear_data_command_handler.ts";
import onDeleteAsset from "../handlers/ch_on_delete_asset.ts";
import onDeleteDB from "../handlers/on_clear_db_data_command_handler.ts";
import onShowInfo from "../handlers/on_info_command_handler.ts";
import onStart from "../handlers/on_start_command_handler.ts";

const composer = new Composer<MyContext>();
// admin commands
composer.command("add", isStaffGroup, isAdmin, onAddAsset);
composer.command("clear", isStaffGroup, isAdmin, onClearAsset);
composer.command("delete", isStaffGroup, isAdmin, onDeleteAsset);

composer.command("info", isAdmin, onShowInfo);
// super admin commands
composer.command("deletedb", isSuperAdmin, onDeleteDB);
// basic commands
composer.command("start", onStart);

export default composer;
