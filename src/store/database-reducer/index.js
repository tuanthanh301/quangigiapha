import { createSlice } from "@reduxjs/toolkit";
import { dataPrimitive } from "./dataPrimitive";

const initialState = {
  database: dataPrimitive,
};

const databaseSlice = createSlice({
  name: "database",
  initialState,
  reducers: {
    storeAddMember: (state, { payload }) => {
      const max = Math.max(...state.database.map((o) => o.id)) + 1;
      state.database = [
        ...state.database,
        {
          ...payload,
          id: max,
          pids: payload.pids ? [Number(payload.pids)] : "",
        },
      ];
    },
    storeEditMember: (state, { payload }) => {
      const newEdit = [...state.database].map(function (element) {
        if (element.id === payload.id) {
          return {
            ...payload,
            pids: payload.pids ? [Number(payload.pids)] : "",
          };
        }
        return element;
      });
      state.database = newEdit;
    },
    storeDeleteMember: (state, { payload }) => {
      const newData = [...state.database];
      const index = newData
        .map(function (element) {
          return element.id;
        })
        .indexOf(payload);

      newData.splice(index, 1);
      state.database = newData;
    },
  },
});

export const { storeAddMember, storeEditMember, storeDeleteMember } =
  databaseSlice.actions;

export default databaseSlice.reducer;
