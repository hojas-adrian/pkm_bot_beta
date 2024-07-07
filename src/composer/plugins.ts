import { Composer, limit, session } from "../deps.ts";
// import session from "../helpers/session.ts";
import MyContext from "../helpers/context.ts";
import { initialAdmin, initialPokedex } from "../helpers/session.ts";

const composer = new Composer<MyContext>();

composer.use(limit());
composer.use(
  session({
    type: "multi",
    admin: {
      initial: initialAdmin,
    },
    pokedex: {
      initial: initialPokedex,
    },
  })
);

export default composer;
