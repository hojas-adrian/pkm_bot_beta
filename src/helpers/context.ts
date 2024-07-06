import { Context, FileFlavor, SessionFlavor } from "../deps.ts";
import { SessionData } from "./session.ts";

type MyContext = FileFlavor<Context> & SessionFlavor<SessionData>;

export default MyContext;
