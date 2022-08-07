import './Explorer.css';

import React, { useState } from 'react';

import { ChatType, GroupChatType } from '../../Modals/Chat/Chat';
import { UserType } from '../../Modals/User/User';
import { selectChats } from '../../Store/ChatSlice/ChatsSlice';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import Finder, { FilterBy } from '../Finder/Finder';
import { menuOptions } from '../Menu/MenuButtom';
import TopBar from '../TopBar/TopBar';
import ChatList from './ChatList/ChatList';
import ChatListFiltered from './ChatListFiltered/ChatListFiltered';

interface ExplorerProps {
  user: UserType;
}

const filterByParticipate: FilterBy<ChatType | GroupChatType> = (
  data: ChatType | GroupChatType,
  value: string
) => {
  let metreq = false;
  data.participants.map((part) => {
    if (part.name.includes(value)) {
      metreq = true;
      console.log(part.name);
    }
  });

  return metreq;
};

const filterByComments: FilterBy<ChatType | GroupChatType> = (
  data: ChatType | GroupChatType,
  value: string
) => {
  let metreq = false;
  data.comments.map((comment) => {
    if (
      comment.content.getConent().toString().includes(value) ||
      comment.content.textContect?.includes(value)
    ) {
      metreq = true;
    }
  });
  return metreq;
};

const Explorer = ({ user }: ExplorerProps) => {
  const [searchingValue, setSearchingValue] = useState<string>("");
  const chatsRedux = useAppSelector(selectChats);
  const [filteredChats, setFilteredChats] = useState<
    (GroupChatType | ChatType)[] | undefined
  >(undefined);
  const dispatch = useAppDispatch();

  const menuItems: menuOptions = {
    newGroup: {
      name: "New Group",
      onClick: () => {},
    },
  };

  return (
    <div className="explorer-root">
      <TopBar userMenu={user} menuItems={menuItems} />
      <div className="finderDiv">
        <Finder<ChatType | GroupChatType>
          value={searchingValue}
          setValue={setSearchingValue}
          data={chatsRedux}
          setData={(value) => setFilteredChats(value)}
          filterBy={(data, value) => {
            return filterByParticipate(data, value)
              ? true
              : filterByComments(data, value);
          }}
          onClear={() => {
            setFilteredChats(undefined);
            setSearchingValue("");
          }}
        />
      </div>
      {searchingValue == "" ? (
        <ChatList />
      ) : (
        <ChatListFiltered chats={filteredChats} />
      )}
    </div>
  );
};

export default Explorer;
