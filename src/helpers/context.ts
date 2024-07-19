import { Context, FileFlavor, SessionFlavor, MenuFlavor } from "../deps.ts";
import { SessionData } from "./session.ts";

type MyContext = FileFlavor<Context & SessionFlavor<SessionData>>;

export type MyMenuContext = MyContext & MenuFlavor;

export default MyContext;
