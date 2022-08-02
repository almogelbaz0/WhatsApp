import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import ChatsReducer from './ChatSlice/ChatsSlice';

const store = configureStore({
  reducer: {
    chats: ChatsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
