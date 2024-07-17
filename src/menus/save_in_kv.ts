import { Menu } from "../deps.ts";
import onCancelKVCallbackHandler from "../handlers/on_cancel_kv_callback_handler.ts";
import onSaveKVCallbackHandler from "../handlers/on_send_kv_callback_handler.ts";
import MyContext from "../helpers/context.ts";
import currentoSave from "../payloads/current_to_save.ts";

export default new Menu<MyContext>("saveInKv")
  .text(
    {
      text: "Cancelar",
      payload: (ctx) => {
        return currentoSave(ctx);
      },
    },
    onCancelKVCallbackHandler
  )
  .text(
    {
      text: "Save",
      payload: (ctx) => {
        return currentoSave(ctx);
      },
    },
    onSaveKVCallbackHandler
  );
