import './ChatListItem.css';

import Avatar from '@mui/material/Avatar';
import React from 'react';

import { ChatType, GroupChatType } from '../../../Modals/Chat/Chat';
import { dateParser } from '../../../utils/Parsers/DateParser';

interface ChatListItemProps {
  chat: ChatType | GroupChatType;
  onClick: (chat: ChatType | GroupChatType) => void;
}

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
