import './ChatListItem.css';

import Avatar from '@mui/material/Avatar';
import React from 'react';

import { ChatType, GroupChatType } from '../../../Modals/Chat/Chat';

interface ChatListItemProps {
  chat: ChatType | GroupChatType;
  onClick: (chat: ChatType | GroupChatType) => void;
}

const dayParser = (dayNum: number) => {
  switch (dayNum) {
    case 1:
      return "Sunday";
      break;
    case 2:
      return "Monday";
      break;
    case 3:
      return "Tuesday";
      break;
    case 4:
      return "Wednesday";
      break;
    case 5:
      return "Thursday";
      break;
    case 6:
      return "Friday";
      break;
    case 7:
      return "Saturday";
      break;
  }
};

const dateParser = (date: Date): string => {
  const now = new Date();
  const startOfDate = new Date();
  startOfDate.setHours(0, 0, 0);
  const lastWeek = new Date(startOfDate.getTime() - 604800000);
  if (startOfDate.getTime() < date.getTime()) {
    return `${date.getHours()}:${date.getMinutes()}`;
  } else if (lastWeek.getTime() < date.getTime()) {
    return `${dayParser(date.getDay())}`;
  } else {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }
};

const ChatListItem = ({ chat, onClick }: ChatListItemProps) => {
  const chatName: string =
    "name" in chat ? chat.name : chat.participants[1].name;

  return (
    <div className="chatItem" onClick={() => onClick(chat)}>
      <div className="chat-img">
        <Avatar alt={chatName} />
      </div>
      <div className="chat-details">
        <span className="chat-name">{chatName}</span>
        <span className="chat-last-comment">
          {chat.comments[chat.comments.length - 1].content.getConent()}
        </span>
        <span className="chat-last-comment-date">
          {dateParser(chat.comments[chat.comments.length - 1].time)}
        </span>
      </div>
    </div>
  );
};

export default ChatListItem;
