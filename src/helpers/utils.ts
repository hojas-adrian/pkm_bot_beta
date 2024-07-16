import MyContext from "./context.ts";
import { User, ChatFullInfo } from "../deps.ts";
import { input, params_set_functios } from "./models.ts";
import { VERSION } from "./constants.ts";
import { isAdmin, isSuperAdmin } from "./actions.ts";

export const name = (user: User) =>
  user.username ? `@${user.username}` : user.first_name || "";

export const haveId = (id: number, idList: string[] | number[]) =>
  idList.some((adminId) => +adminId === id);

export const sendMessage = async (
  ctx: MyContext,
  toChatId: string,
  message: string,
  replyMessageId?: number
) =>
  await ctx.api.sendMessage(toChatId, message, {
    parse_mode: "HTML",
    reply_parameters: {
      message_id: replyMessageId || 0,
    },
  });

export const sendSticker = async (
  ctx: MyContext,
  toChatId: string,
  sticker: string,
  replyMessageId?: number
) =>
  await ctx.api.sendSticker(toChatId, sticker, {
    reply_parameters: {
      message_id: replyMessageId || 0,
    },
  });

export const getDataString = (data: params_set_functios) => {
  switch (data.type) {
    case "pkm": {
      return `type: ${data.type}\nname: ${data.data.name} ${
        data.data.sex ? (data.data.sex === "male" ? "♂" : "♀") : ""
      }\nfrecuencia: ${data.data.freq}\nid: ${data.data.file_id}\n\n#${
        data.data.id
      }`;
    }

    case "npc": {
      return `type: ${data.type}\nname: ${data.data.name}\nid: ${data.data.file_id}\n\n#${data.data.id}`;
    }
  }
};

export const getUserData = (user: User) => {
  return `👤 ${user.first_name}\n├─ <a href="t.me/${user.username}">@${user.username}</a>\n├─ <a href="tg://user?id=${user.id}">${user.id}</a>\n└─ #a${user.id}`;
};

export const getChatData = (chat: ChatFullInfo) => {
  const link = chat.type !== "private" && chat.invite_link;

  return `👥 ${chat.title}${
    chat.username ? `\n├─${chat.username}` : ""
  }\n└─ <a href="${link}">${chat.id}</a>`;
};

export const getBotData = (ctx: MyContext) => {
  const version = VERSION.join(".");

  const chat = ctx.me as User;
  const user = ctx.from as User;

  return `🤖 ${chat.first_name}\n├─ <a href="t.me/${chat.username}">@${
    chat.username
  }</a>\n└─ ${version}\n\n🧑‍💼 ${user.first_name}\n├─ <a href="t.me/${
    user.username
  }">@${user.username}</a>\n├─ <a href="tg://user?id=${user.id}">${
    user.id
  }</a>\n├─ ${getRole(ctx)}\n└─ #a${user.id}`;
};

const getRole = (ctx: MyContext) => {
  isAdmin(ctx);

  if (isSuperAdmin(ctx)) {
    return "owner";
  }

  if (isAdmin(ctx)) {
    return "admin";
  }
};

export const getData = (text: string) => {
  const [type, id, name, freq, sex] = text.split(" . ") as input;

  switch (type) {
    case "npc":
      return {
        type,
        data: {
          id,
          name,
        },
      };

    case "pkm":
      return {
        type,
        data: {
          id,
          name,
          freq: +freq,
          sex,
        },
      };
  }
};

export const addStickerId = (
  data:
    | {
        type: "npc";
        data: {
          id: string;
          name: string;
          freq?: undefined;
          sex?: undefined;
        };
      }
    | {
        type: "pkm";
        data: {
          id: string;
          name: string;
          freq: number;
          sex: "male" | "female" | undefined;
        };
      },
  file_id: string
) => {
  switch (data.type) {
    case "npc":
      return {
        type: data.type,
        data: {
          ...data.data,
          file_id,
        },
      };

    case "pkm":
      return {
        type: data.type,
        data: {
          ...data.data,
          file_id,
        },
      };
  }
};
