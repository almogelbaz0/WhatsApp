import './Explorer.css';

import React, { useState } from 'react';

import { ChatType, GroupChatType } from '../../Modals/Chat/Chat';
import { UserType } from '../../Modals/User/User';
import { selectChats, setChats as setReduxChats } from '../../Store/ChatSlice/ChatsSlice';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import Finder, { FilterBy } from '../Finder/Finder';
import TopBar from '../TopBar/TopBar';
import ChatList from './ChatList/ChatList';

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
    }
  });

  return metreq;
};

const Explorer = ({ user }: ExplorerProps) => {
  const [searchingValue, setSearchingValue] = useState<string>("");
  const chatsRedux = useAppSelector(selectChats);
  const dispatch = useAppDispatch();
  return (
    <div className="explorer-root">
      <TopBar userMenu={user} />
      <div className="finderDiv">
        <Finder<ChatType | GroupChatType>
          value={searchingValue}
          setValue={setSearchingValue}
          data={chatsRedux}
          setData={(value) => dispatch(setReduxChats(value))}
          filterBy={filterByParticipate}
          onClear={() => {
            // setChats(chats);
          }}
        />
      </div>
      <ChatList />
    </div>
  );
};

export default Explorer;
