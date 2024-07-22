import { Composer } from "../deps.ts";
import apparience from "../handlers/apparience.ts";
import MyContext from "../helpers/context.ts";
// import isNewChatMember from "../middlewares/is_chat_member_join.ts";
// import showGroupInfo from "../handlers/ch_show_group_info.ts";
import isNotNewGroup from "../middlewares/is_not_new_group.ts";
import random from "../middlewares/random.ts";

const composer = new Composer<MyContext>();

// composer.on("my_chat_member:from:me", isNewChatMember, showGroupInfo);
composer.use(isNotNewGroup, random, apparience);

export default composer;
