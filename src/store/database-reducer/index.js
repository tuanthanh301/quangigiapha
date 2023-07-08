import { createSlice } from "@reduxjs/toolkit";
import { dataCollectDefaultMoney } from "./dataCollectDefaultMoney";
import { dataPrimitive } from "./dataPrimitive";
import { dataRevenueDefault } from "./dataRevenueDefault";

const initialState = {
  database: dataPrimitive,
  dataCollect: dataCollectDefaultMoney,
  dataRevenue: dataRevenueDefault,
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
          pids: payload.pids ? [Number(payload.pids)] : " ",
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
    storeDeleteCollect: (state, { payload }) => {
      const newData = [...state.dataCollect];
      const index = newData
        .map(function (element) {
          return element.id;
        })
        .indexOf(payload);
      newData.splice(index, 1);
      state.dataCollect = newData;
    },
    storeDeleteRevenue: (state, { payload }) => {
      const newData = [...state.dataRevenue];
      const index = newData
        .map(function (element) {
          return element.id;
        })
        .indexOf(payload);
      newData.splice(index, 1);
      state.dataRevenue = newData;
    },
    storeAddRevenue: (state, { payload }) => {
      const max = Math.max(...state.dataRevenue.map((o) => o.id)) + 1;
      let newDataRevenue = [
        ...state.dataRevenue,
        {
          ...payload,
          id: max,
        },
      ];
      
      state.dataRevenue = newDataRevenue;
    },
    storeAddCollect: (state, { payload }) => {
      const max = Math.max(...state.dataCollect.map((o) => o.id)) + 1;
      let newDataCollect = [
        ...state.dataCollect,
        {
          ...payload,
          id: max,
        },
      ];
      
      state.dataCollect = newDataCollect;
    },
  },
});

export const {
  storeAddMember,
  storeEditMember,
  storeDeleteMember,
  storeDeleteCollect,
  storeDeleteRevenue,
  storeAddRevenue,
  storeAddCollect,
} = databaseSlice.actions;

export default databaseSlice.reducer;
