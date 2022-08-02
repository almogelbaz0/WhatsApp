import './Chat.css';

import React, { useEffect, useRef, useState } from 'react';

import { CommentType } from '../../Modals/Comment/Comment';
import { UserType } from '../../Modals/User/User';
import { currentChats, sendCommend, sendCommendProps } from '../../Store/ChatSlice/ChatsSlice';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import Comment from '../Comment/Comment';
import TopBar from '../TopBar/TopBar';
import ChatInput from './ChatInput/ChatInput';

interface ChatProps {
  mainUser: UserType;
}

const Chat = ({ mainUser }: ChatProps) => {
  const currentChat = useAppSelector(currentChats);
  const dispatch = useAppDispatch();

  const addMessageToChat1 = (messgae: string): sendCommendProps => {
    return {
      commend: {
        sender: mainUser,
        time: new Date(),
        content: { getConent: () => <span>{messgae}</span> },
      } as CommentType,
      chat: currentChat,
    };
  };

  return (
    <div className="mainChatDiv">
      <TopBar userMenu={currentChat.participants[1]} />
      <div className="chat-content">
        {currentChat.comments.map((comment: CommentType) => {
          return (
            <Comment
              isMyComment={mainUser.id == comment.sender.id}
              comment={comment}
            ></Comment>
          );
        })}
      </div>
      <div className="chatInputDiv">
        <ChatInput
          sendMessage={(message) =>
            dispatch(sendCommend(addMessageToChat1(message)))
          }
        ></ChatInput>
      </div>
    </div>
  );
};

export default Chat;
