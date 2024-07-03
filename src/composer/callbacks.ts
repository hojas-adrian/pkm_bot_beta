import { Composer } from "../../deps.ts";
import onCatchHandler from "../handler/on_catch_handler.ts";

const composer = new Composer();

composer.callbackQuery("catchIt", onCatchHandler);

export default composer;
