import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfor: null,
  listAccount: [
    {
      id: 1,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeAddAccount: (state, { payload }) => {
      console.log("tate.listAccount", state.listAccount);
      const max = Math.max(...state.listAccount.map((acc) => acc.id)) + 1;
      state.listAccount = [
        ...state.listAccount,
        {
          ...payload,
          id: max,
        },
      ];
    },
    storeSetUserInfor: (state, { payload}) => {
        state.userInfor = payload
    },
    
  },
});

export const { storeAddAccount, storeSetUserInfor } = authSlice.actions;

export default authSlice.reducer;
