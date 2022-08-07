import './Chat.css';

import React, { useEffect, useRef, useState } from 'react';

import { CommentType } from '../../Modals/Comment/Comment';
import { UserType } from '../../Modals/User/User';
import { currentChats, reciveCommend, sendCommend, sendCommendProps } from '../../Store/ChatSlice/ChatsSlice';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import Comment from '../Comment/Comment';
import { menuOptions } from '../Menu/MenuButtom';
import TopBar from '../TopBar/TopBar';
import ChatInput from './ChatInput/ChatInput';

// class Singlton

interface ChatProps {
  mainUser: UserType;
}

const Chat = ({ mainUser }: ChatProps) => {
  const currentChat = useAppSelector(currentChats);
  const dispatch = useAppDispatch();
  const [scrollToEnd, setCcrollToEnd] = useState<boolean>(true);

  const chatContentRef = useRef(null);

  const scrollToBottom = () => {
    //@ts-ignore
    chatContentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatContentRef]);

  const addMessageToChat = (messgae: string): sendCommendProps => {
    return {
      commend: {
        sender: mainUser,
        time: new Date(),
        content: {
          getConent: () => <span>{messgae}</span>,
          textContect: messgae,
        },
      } as CommentType,
      chat: currentChat,
    };
  };

  const menuItems: menuOptions = {
    search: {
      name: "search",
      onClick: () => {},
    },
  };
  const chatName = currentChat.hasOwnProperty("participants")
    ? "name" in currentChat
      ? currentChat.name
      : currentChat.participants[1].name
    : "";

  return currentChat.hasOwnProperty("participants") ? (
    <div className="mainChatDiv">
      <TopBar
        userMenu={currentChat.participants[1]}
        headerName={chatName}
        menuItems={menuItems}
      />
      <div
        className="chat-content"
        onScroll={(event) => {
          if (event.currentTarget.scrollTop == 0) {
            console.log("fetchData");
            dispatch(reciveCommend());
          }
        }}
      >
        {currentChat.comments.map((comment: CommentType) => {
          return (
            <Comment
              isMyComment={mainUser.id == comment.sender.id}
              comment={comment}
            ></Comment>
          );
        })}
        <div ref={chatContentRef}></div>
      </div>
      <div className="chatInputDiv">
        <ChatInput
          sendMessage={(message) =>
            dispatch(sendCommend(addMessageToChat(message)))
          }
        ></ChatInput>
      </div>
      <div></div>
    </div>
  ) : (
    <div className="mainChatDiv"></div>
  );
};

export default Chat;
