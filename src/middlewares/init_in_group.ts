import { Router } from "../deps.ts";
import MyContext from "../helpers/context.ts";

const router = new Router<MyContext>(() => {
  // Determine route to pick here.
  return "key";
});

router.route("key", async () => {
  /* ... */
});
router.route("other-key", async () => {
  /* ... */
});
router.otherwise(() => {
  /* ... */
}); // called if no route matches

export default router;
