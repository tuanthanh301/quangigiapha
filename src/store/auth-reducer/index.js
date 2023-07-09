import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfor: null,
  listAccount: [
    {
      id: 1,
      firstName: "admin",
      lastName: "admin",
      email: "admin@gmail.com",
      password: "123",
      confirmPassword: "123",
      isOwner: true,
    },
    {
      id: 1,
      firstName: "Nguyen",
      lastName: "Thanh",
      email: "thanh123@gmail.com",
      password: "123",
      confirmPassword: "123",
    },
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeAddAccount: (state, { payload }) => {
      const max = Math.max(...state.listAccount.map((acc) => acc.id)) + 1;
      state.listAccount = [
        ...state.listAccount,
        {
          ...payload,
          id: max,
        },
      ];
    },
    storeSetUserInfor: (state, { payload }) => {
      state.userInfor = payload;
    },
    storeDeleteUserInfor: (state, { payload }) => {
      // const newUserInfor = [...state.userInfor];
      // const index = newUserInfor
      //   .map(function (element) {
      //     return element.id;
      //   })
      //   .indexOf(payload);
      // newUserInfor.splice(index, 1);
      // state.userInfor = newUserInfor;
      state.userInfor = null;
    },
  },
});

export const { storeAddAccount, storeSetUserInfor, storeDeleteUserInfor } =
  authSlice.actions;

export default authSlice.reducer;
