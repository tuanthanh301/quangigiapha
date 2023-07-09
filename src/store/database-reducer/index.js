import { createSlice } from "@reduxjs/toolkit";
import { dataCollectDefaultMoney } from "./dataCollectDefaultMoney";
import { dataEventDefault } from "./dataEventDefault";
import { dataExpensesDefault } from "./dataExpensesDefault";
import { dataPrimitive } from "./dataPrimitive";
import { dataRevenueDefault } from "./dataRevenueDefault";
import { dataSponsorDefault } from "./dataSponsor";
import { dataTypeExpenseDefault } from "./dataTypeExpenseDefault";

const initialState = {
  database: dataPrimitive,
  dataCollect: dataCollectDefaultMoney,
  dataRevenue: dataRevenueDefault,
  dataSponsor: dataSponsorDefault,
  dataExpense: dataExpensesDefault,
  dataTypeExpense: dataTypeExpenseDefault,
  dataEvent: dataEventDefault,
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
      const max =
        state.dataCollect.length > 0
          ? Math.max(...state.dataCollect.map((o) => o.id)) + 1
          : 1;

      let newDataCollect = [
        ...state.dataCollect,
        {
          ...payload,
          id: max,
        },
      ];

      state.dataCollect = newDataCollect;
    },
    storeDeleteSponsor: (state, { payload }) => {
      const newData = [...state.dataSponsor];
      const index = newData
        .map(function (element) {
          return element.id;
        })
        .indexOf(payload);
      newData.splice(index, 1);
      state.dataSponsor = newData;
    },
    storeAddSponsor: (state, { payload }) => {
      const max =
        state.dataSponsor.length > 0
          ? Math.max(...state.dataSponsor.map((o) => o.id)) + 1
          : 1;

      let newDataSponsor = [
        ...state.dataSponsor,
        {
          ...payload,
          id: max,
        },
      ];
      state.dataSponsor = newDataSponsor;
    },
    storeDeleteTypeExpense: (state, { payload }) => {
      const newData = [...state.dataTypeExpense];
      const index = newData
        .map(function (element) {
          return element.id;
        })
        .indexOf(payload);
      newData.splice(index, 1);
      state.dataTypeExpense = newData;
    },
    storeAddTypeExpense: (state, { payload }) => {
      const max =
        state.dataTypeExpense.length > 0
          ? Math.max(...state.dataTypeExpense.map((o) => o.id)) + 1
          : 1;

      let newDataTypeExpense = [
        ...state.dataTypeExpense,
        {
          ...payload,
          id: max,
        },
      ];
      state.dataTypeExpense = newDataTypeExpense;
    },
    storeDeleteExpense: (state, { payload }) => {
      const newData = [...state.dataExpense];
      const index = newData
        .map(function (element) {
          return element.id;
        })
        .indexOf(payload);
      newData.splice(index, 1);
      state.dataExpense = newData;
    },
    storeAddExpense: (state, { payload }) => {
      const max =
        state.dataExpense.length > 0
          ? Math.max(...state.dataExpense.map((o) => o.id)) + 1
          : 1;

      let newDataExpense = [
        ...state.dataExpense,
        {
          ...payload,
          id: max,
        },
      ];
      state.dataExpense = newDataExpense;
    },
    
    storeAddEvent: (state, { payload }) => {
      const max =
        state.dataEvent.length > 0
          ? Math.max(...state.dataEvent.map((o) => o.id)) + 1
          : 1;

      let newDataEvent = [
        ...state.dataEvent,
        {
          ...payload,
          id: max,
        },
      ];
      state.dataEvent = newDataEvent;
    },
    storeDeleteEvent: (state, { payload }) => {
      const newData = [...state.dataEvent];
      const index = newData
        .map(function (element) {
          return element.id;
        })
        .indexOf(payload);
      newData.splice(index, 1);
      state.dataEvent = newData;
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
  storeDeleteSponsor,
  storeAddSponsor,
  storeDeleteTypeExpense,
  storeAddTypeExpense,
  storeDeleteExpense,
  storeAddExpense,
  storeDeleteEvent,
  storeAddEvent,
} = databaseSlice.actions;

export default databaseSlice.reducer;
