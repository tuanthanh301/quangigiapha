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
      const max = Math.max(...state.database.map((o) => o.key)) + 1;
      state.database = [
        ...state.database,
        {
          ...payload,
          key: max,
        },
      ];
    },
    storeEditMember: (state, { payload }) => {
      const newEdit = [...state.database].map(function (element) {
        if (element.key === payload.key) {
          return payload;
        }
        return element;
      });
      state.database = newEdit;
    },
    storeDeleteMember: (state, { payload }) => {
      const newData = [...state.database];
      const index = newData
        .map(function (element) {
          return element.key;
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
