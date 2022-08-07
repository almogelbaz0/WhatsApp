import React from 'react';

import { ChatType, GroupChatType } from '../../Modals/Chat/Chat';
import { CommentType } from '../../Modals/Comment/Comment';
import { UserType } from '../../Modals/User/User';

export const ThisUser: UserType = {
  name: "Almogie",
  phoneNumber: "0524488432",
  id: "123",
  lastSync: new Date(),
};

type UserDB = {
  [name: string]: UserType;
};

const users: UserDB = {
  Almog: ThisUser,
  Yossi: {
    name: "Yossi",
    phoneNumber: "0524488431",
    id: "143",
    lastSync: new Date(new Date().getTime() - 1000000),
  },
  Lony: {
    name: "Lony",
    phoneNumber: "0524488433",
    id: "153",
    lastSync: new Date(new Date().getTime() - 3000000),
  },
};

export let ChatExemple: (ChatType | GroupChatType)[] = [
  {
    id: 1,
    type: "private",
    participants: [users["Almog"], users["Yossi"]],
    comments: [
      {
        time: new Date(new Date().getTime() - 300000000),
        sender: users["Almog"],
        content: {
          getConent: () => "Hey",
        },
      },
      {
        time: new Date(new Date().getTime() - 300000),
        sender: users["Yossi"],
        content: {
          getConent: () => (
            <span>
              Hey2 prototype property of the constructor appears in the
              prototype chain of the object.
            </span>
          ),
          textContect:
            "Hey2 prototype property of the constructor appears in theprototype chain of the object.",
        },
      },
      {
        time: new Date(new Date().getTime() - 300000),
        sender: users["Almog"],
        content: {
          getConent: () => <span>hey</span>,
        },
      },
      {
        time: new Date(new Date().getTime() - 300000),
        sender: users["Almog"],
        content: {
          getConent: () => (
            <span>
              hey prototype property of the constructor appears in the prototype
              chain of the object.
            </span>
          ),
        },
      },
      {
        time: new Date(new Date().getTime() - 290000),
        sender: users["Almog"],
        content: {
          getConent: () => (
            <span>
              hey prototype property of the constructor appears in the prototype
              chain of the object.
            </span>
          ),
        },
      },
      {
        time: new Date(new Date().getTime() - 290000),
        sender: users["Yossi"],
        content: {
          getConent: () => (
            <span>
              hey prototype property of the constructor appears in the prototype
              chain of the object.
            </span>
          ),
        },
      },
      {
        time: new Date(new Date().getTime() - 290000),
        sender: users["Yossi"],
        content: {
          getConent: () => (
            <span>
              hey prototype property of the constructor appears in the prototype
              chain of the object.
            </span>
          ),
        },
      },
      {
        time: new Date(new Date().getTime() - 200000),
        sender: users["Almog"],
        content: {
          getConent: () => <span>hey</span>,
        },
      },
      {
        time: new Date(new Date().getTime() - 200000),
        sender: users["Almog"],
        content: {
          getConent: () => (
            <span>
              hey prototype property of the constructor appears in the prototype
              chain of the object.
            </span>
          ),
        },
      },
      {
        time: new Date(new Date().getTime() - 190000),
        sender: users["Almog"],
        content: {
          getConent: () => (
            <span>
              hey prototype property of the constructor appears in the prototype
              chain of the object.
            </span>
          ),
        },
      },
      {
        time: new Date(new Date().getTime() - 190000),
        sender: users["Yossi"],
        content: {
          getConent: () => (
            <span>
              hey prototype property of the constructor appears in the prototype
              chain of the object.
            </span>
          ),
        },
      },
      {
        time: new Date(new Date().getTime() - 190000),
        sender: users["Yossi"],
        content: {
          getConent: () => (
            <span>
              hey prototype property of the constructor appears in the prototype
              chain of the object.
            </span>
          ),
        },
      },
    ],
  },
  {
    id: 2,
    name: "Friends For Ever ",
    type: "group",
    participants: [users["Almog"], users["Lony"], users["Yossi"]],
    comments: [
      {
        time: new Date(),
        sender: users["Almog"],
        content: {
          getConent: () => <span>hey</span>,
        },
      },
      {
        time: new Date(),
        sender: users["Lony"],
        content: {
          getConent: () => <span>hdklashhlkdjasey</span>,
        },
      },
    ],
  },
];

export const newDataOfYossi: CommentType[] = [
  {
    time: new Date("2022-07-03T19:11:57.373Z"),
    sender: users["Almog"],
    content: {
      getConent: () => "Hey",
    },
  },
  {
    time: new Date("2022-07-03T19:12:00.373Z"),
    sender: users["Yossi"],
    content: {
      getConent: () => (
        <span>
          Hey2 prototype property of the constructor appears in the prototype
          chain of the object.
        </span>
      ),
      textContect:
        "Hey2 prototype property of the constructor appears in theprototype chain of the object.",
    },
  },
  {
    time: new Date("2022-07-03T19:12:30.373Z"),
    sender: users["Almog"],
    content: {
      getConent: () => <span>hey</span>,
    },
  },
  {
    time: new Date("2022-07-03T19:12:57.373Z"),
    sender: users["Almog"],
    content: {
      getConent: () => (
        <span>
          hey prototype property of the constructor appears in the prototype
          chain of the object.
        </span>
      ),
    },
  },
];
