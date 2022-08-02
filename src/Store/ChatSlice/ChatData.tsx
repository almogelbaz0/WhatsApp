import React from 'react';

import { ChatType, GroupChatType } from '../../Modals/Chat/Chat';
import { UserType } from '../../Modals/User/User';

const ThisUser: UserType = {
  name: "almogie",
  phoneNumber: "0524488432",
  id: "123",
  lastSync: new Date(),
};

export const ChatExemple: (ChatType | GroupChatType)[] = [
  {
    id: 1,

    participants: [
      {
        name: "almogie",
        phoneNumber: "0524488432",
        id: "123",
        lastSync: new Date(),
      },
      {
        name: "Hlmogie",
        phoneNumber: "0524488432",
        id: "143",
        lastSync: new Date(),
      },
    ],
    comments: [
      {
        time: new Date(),
        sender: {
          name: "almog",
          phoneNumber: "0524488432",
          id: "123",
          lastSync: new Date(),
        },
        content: {
          getConent: () => <span>hey1</span>,
        },
      },
      {
        time: new Date(),
        sender: {
          name: "Hlmog",
          phoneNumber: "0524488432",
          id: "133",
          lastSync: new Date(),
        },
        content: {
          getConent: () => (
            <span>
              hey2 prototype property of the constructor appears in the
              prototype chain of the object.
            </span>
          ),
        },
      },
      {
        time: new Date(),
        sender: {
          name: "Hlmog",
          phoneNumber: "0524488432",
          id: "133",
          lastSync: new Date(),
        },
        content: {
          getConent: () => <span>hey</span>,
        },
      },
      {
        time: new Date(),
        sender: {
          name: "almog",
          phoneNumber: "0524488432",
          id: "123",
          lastSync: new Date(),
        },
        content: {
          getConent: () => (
            <span>
              heyprototype property of the constructor appears in the prototype
              chain of the object.
            </span>
          ),
        },
      },
    ],
  },
  {
    id: 2,
    name: "Freinds",
    participants: [
      {
        name: "almogie",
        phoneNumber: "0524488432",
        id: "123",
        lastSync: new Date(),
      },
      {
        name: "Lony",
        phoneNumber: "0524488432",
        id: "153",
        lastSync: new Date(),
      },
    ],
    comments: [
      {
        time: new Date(),
        sender: {
          name: "almog",
          phoneNumber: "0524488432",
          id: "123",
          lastSync: new Date(),
        },
        content: {
          getConent: () => <span>hey</span>,
        },
      },
      {
        time: new Date(),
        sender: {
          name: "Hlmog",
          phoneNumber: "0524488432",
          id: "153",
          lastSync: new Date(),
        },
        content: {
          getConent: () => <span>hdklashhlkdjasey</span>,
        },
      },
    ],
  },
];
