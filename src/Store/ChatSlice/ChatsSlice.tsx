import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ChatType, GroupChatType } from '../../Modals/Chat/Chat';
import { CommentType } from '../../Modals/Comment/Comment';
import { RootState } from '../store';
import { ChatExemple } from './ChatData';

export interface sendCommendProps {
  commend: CommentType;
  chat: ChatType | GroupChatType;
}

export const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    value: ChatExemple,
    currentChat: ChatExemple[0],
  },
  reducers: {
    addChat: (state, action: PayloadAction<ChatType | GroupChatType>) => {
      state.value.push(action.payload);
    },
    sendCommend: (state, action: PayloadAction<sendCommendProps>) => {
      state.currentChat.comments.push(action.payload.commend);
      const newChats = state.value.map((chat) => {
        return chat.id == state.currentChat.id ? state.currentChat : chat;
      });
      state.value = newChats;
    },
    setChats: (state, action: PayloadAction<(ChatType | GroupChatType)[]>) => {
      state.value = action.payload;
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
export const { addChat, sendCommend, setChats, setCurrentChat } =
  chatsSlice.actions;
export const selectChats = (state: RootState) => state.chats.value;
export const currentChats = (state: RootState) => state.chats.currentChat;
export default chatsSlice.reducer;
