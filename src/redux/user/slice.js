import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    createUser: (state, action) => {
      return {...state, user: action.payload};
    },
    removeUser: state => {
      return {...state, user: null};
    },
  },
});

export const { createUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
