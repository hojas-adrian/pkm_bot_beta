import { Composer } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import metricGroup from "../middlewares/metric_group.ts";
import is_chat_me_member from "../middlewares/is_chat_me_member.ts";
import isNewGroup from "../middlewares/is_new_group.ts";

const composer = new Composer<MyContext>();

composer.on("my_chat_member", is_chat_me_member, isNewGroup, metricGroup);

export default composer;
