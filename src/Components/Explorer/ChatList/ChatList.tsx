import './ChatList.css';

import React from 'react';

import { ChatType, GroupChatType } from '../../../Modals/Chat/Chat';
import { selectChats, setCurrentChat } from '../../../Store/ChatSlice/ChatsSlice';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import ChatListItem from '../ChatListItem/ChatListItem';

const ChatList = () => {
  const chats = useAppSelector(selectChats);
  const dispatch = useAppDispatch();

  return (
    <div>
      {chats.map((chat: ChatType | GroupChatType, index: number) => {
        return (
          <ChatListItem
            key={index}
            chat={chat}
            onClick={(chat: ChatType | GroupChatType) =>
              dispatch(setCurrentChat(chat))
            }
          ></ChatListItem>
        );
      })}
    </div>
  );
};

export default ChatList;
