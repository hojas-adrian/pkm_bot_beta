import metricsUser from "../middlewares/metrics_user.ts";
import inPv from "../middlewares/in_pv.ts";
import ifNewUser from "../router/if_new_user.ts";
import ch_start_new from "../handlers/ch_start_new.ts";
import ch_start from "../handlers/ch_start.ts";

const route = ifNewUser;

route.route("isNew", inPv, metricsUser, ch_start_new);
route.route("isNtNew", inPv, ch_start);

export default route;
