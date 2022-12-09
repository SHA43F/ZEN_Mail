import { createSlice } from "@reduxjs/toolkit";

const initialEmailState = {
  inbox: [],
};

const EmailSlice = createSlice({
  name: "email",
  initialState: initialEmailState,
  reducers: {
    setInbox: (state, action) => {
      state.inbox = action.payload;
    },
  },
});

export const EmailActions = EmailSlice.actions;

export default EmailSlice.reducer;