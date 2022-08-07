import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ChatType, GroupChatType } from '../../Modals/Chat/Chat';
import { CommentType } from '../../Modals/Comment/Comment';
import { RootState } from '../store';
import { ChatExemple, newDataOfYossi } from './ChatData';

const sortedDesc = <T extends { comments: CommentType[] }>(array: T[]) => {
  return array.sort(
    (objA, objB) =>
      objB.comments[objB.comments.length - 1].time.getTime() -
      objA.comments[objA.comments.length - 1].time.getTime()
  );
};

const sortedDescMessages = <T extends CommentType>(array: T[]) => {
  return array.sort((objA, objB) => objA.time.getTime() - objB.time.getTime());
};

export interface sendCommendProps {
  commend: CommentType;
  chat: ChatType | GroupChatType;
}

export const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    value: sortedDesc(ChatExemple),
    currentChat: {} as ChatType | GroupChatType,
    fetchs: 0,
  },
  reducers: {
    addChat: (state, action: PayloadAction<ChatType | GroupChatType>) => {
      state.value.push(action.payload);
    },
    reciveCommend: (state) => {
      if (state.fetchs == 0) {
        const newComments = [...newDataOfYossi, ...state.currentChat.comments];
        state.currentChat.comments = sortedDescMessages(newComments);
        state.fetchs++;
      }
    },
    sendCommend: (state, action: PayloadAction<sendCommendProps>) => {
      state.currentChat.comments.push(action.payload.commend);
      const newChats = state.value.map((chat) => {
        return chat.id == state.currentChat.id ? state.currentChat : chat;
      });
      state.value = sortedDesc(newChats);
    },
    setChats: (state, action: PayloadAction<(ChatType | GroupChatType)[]>) => {
      state.value = sortedDesc(action.payload);
    },
    setCurrentChat: (
      state,
      action: PayloadAction<ChatType | GroupChatType>
    ) => {
      state.currentChat = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addChat, sendCommend, setChats, setCurrentChat, reciveCommend } =
  chatsSlice.actions;
export const selectChats = (state: RootState) => state.chats.value;
export const currentChats = (state: RootState) => state.chats.currentChat;
export default chatsSlice.reducer;
