import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../Modals/User/User';
import { ThisUser } from '../ChatSlice/ChatData';
import { RootState } from '../store';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: ThisUser,
  },
  reducers: {
    logOutUser: (state, action: PayloadAction<UserType>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logOutUser } = userSlice.actions;
export const selectMainUser = (state: RootState) => state.mainUser.value;

export default userSlice.reducer;
