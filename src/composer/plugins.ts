import { Composer, limit, session } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import {
  initialAdmin,
  initialGroup,
  initialUser,
  initialBeta,
} from "../helpers/session.ts";

const composer = new Composer<MyContext>();

composer.use(limit());
composer.use(
  session({
    type: "multi",
    admin: {
      initial: initialAdmin,
    },
    user: {
      initial: initialUser,
    },
    group: {
      initial: initialGroup,
    },
    beta: {
      initial: initialBeta,
    },
  })
);

export default composer;
