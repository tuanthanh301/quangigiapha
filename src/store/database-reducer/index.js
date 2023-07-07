import { createSlice } from "@reduxjs/toolkit";
import { dataDegree } from "./dataDegree";
import { dataPrimitive } from "./dataPrimitive";

const initialState = {
  database: dataPrimitive,
  // dataDe: dataDegree,
};

const databaseSlice = createSlice({
  name: "database",
  initialState,
  reducers: {
    storeAddMember: (state, { payload }) => {
      const max = Math.max(...state.database.map((o) => o.id)) + 1;
      let newData = [
        ...state.database,
        {
          ...payload,
          id: max,
          pids: payload.pids ? [Number(payload.pids)] : "",
        },
      ];
      if (payload.pids) {
        newData = newData.map((element) => {
          if (element.id === payload.pids) {
            return {
              ...element,
              pids: [max],
            };
          }
          return element;
        });
      }
      state.database = newData;
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
