import './ChatList.css';

import React from 'react';

import { ChatType, GroupChatType } from '../../../Modals/Chat/Chat';
import { setCurrentChat } from '../../../Store/ChatSlice/ChatsSlice';
import { useAppDispatch } from '../../../Store/hooks';
import ChatListItem from '../ChatListItem/ChatListItem';

interface ChatListFilteredProps {
  chats: (ChatType | GroupChatType)[] | undefined;
}

const ChatListFiltered = ({ chats }: ChatListFilteredProps) => {
  // const chats = useAppSelector(selectChats);
  const dispatch = useAppDispatch();

  return (
    <div>
      {chats?.map((chat: ChatType | GroupChatType, index: number) => {
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

export default ChatListFiltered;
