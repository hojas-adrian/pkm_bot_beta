import { Composer } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import isStaffGroup from "../middlewares/is_staff_group.ts";
import isAdmin from "../middlewares/is_admin.ts";
import isSuperAdmin from "../middlewares/is_super_admin.ts";
import onAddAsset from "../handlers/on_add_asset_command_handler.ts";
import onClearAsset from "../handlers/on_clear_data_command_handler.ts";
import onDeleteAsset from "../handlers/ch_on_delete_asset.ts";
import onInitData from "../handlers/ch_on_set_region.ts";
import onDeleteDB from "../handlers/on_clear_db_data_command_handler.ts";
import onShowInfo from "../handlers/on_info_command_handler.ts";
import onStart from "../handlers/on_start_command_handler.ts";
import metrics from "../middlewares/metrics.ts";
import i from "../middlewares/init_in_group.ts";

const composer = new Composer<MyContext>();
// admin commands
composer.command("add", isStaffGroup, isAdmin, onAddAsset);
composer.command("clear", isStaffGroup, isAdmin, onClearAsset);
composer.command("delete", isStaffGroup, isAdmin, onDeleteAsset);
composer.command("aaa", i);

composer.command("info", isAdmin, onShowInfo);
// super admin commands
composer.command("init", isSuperAdmin, onInitData);
composer.command("deletedb", isSuperAdmin, onDeleteDB);
// basic commands
composer.command("start", metrics, onStart);

export default composer;
