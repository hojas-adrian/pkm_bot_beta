import { Composer } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import metricsUser from "../middlewares/metrics_user.ts";
import inPv from "../middlewares/in_pv.ts";
import ifNewUser from "../router/if_new_user.ts";

const composer = new Composer<MyContext>();

composer.use(ifNewUser.route("isNew", inPv, metricsUser));
composer.use(ifNewUser.route("isNtNew", inPv));

export default composer;
