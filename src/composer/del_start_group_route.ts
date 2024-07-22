import ifNewGroup from "../router/if_new_group.ts";
import inGroup from "../middlewares/in_group.ts";
import metricGroup from "../middlewares/metric_group.ts";
import ohNewGroup from "../handlers/del_oh_new_group.ts";

const route = ifNewGroup;

ifNewGroup.route("isNew", inGroup, metricGroup, ohNewGroup);

ifNewGroup.route("isNtNew", inGroup, (ctx) =>
  console.log(ctx.session.group.cache.zone)
);

export default route;
