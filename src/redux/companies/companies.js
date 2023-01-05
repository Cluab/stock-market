import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getStocksValueAsync from '../../services/stocksValueAPI';

const GET_VALUE = 'stockMarket/VALUE/GET_VALUE';

export const sortAscendingAction = (state) => {
  const newState = state.sort((a, b) => b[0].revenue - a[0].revenue);
  return newState;
};

export const sortDescendingAction = (state) => {
  const newState = state.sort((a, b) => a[0].revenue - b[0].revenue);
  return newState;
};

export const getValue = createAsyncThunk(GET_VALUE, async (stocks) => {
  const res = await getStocksValueAsync(stocks);
  return res;
});

export const valueSlice = createSlice({
  name: 'stocks',
  initialState: [],
  reducers: {
    sortAscending(state) {
      return sortAscendingAction(state);
    },
    sortDescending(state) {
      return sortDescendingAction(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getValue.fulfilled, (state, { payload }) => {
      const value = [payload[0]];
      state.push(value.map((value) => ({
        symbol: value.symbol,
        date: value.date,
        revenue: value.revenue,
        costOfRevenue: value.costOfRevenue,
        costAndExpenses: value.costAndExpenses,
        ebitda: value.ebitda,
        grossProfit: value.grossProfit,
        grossProfitRatio: value.grossProfitRatio,
        operatingExpenses: value.operatingExpenses,
        operatingIncome: value.operatingIncome,
        eps: value.eps,
        operatingIncomeRatio: value.operatingIncomeRatio,
      })));
    });
  },
});

export default valueSlice.reducer;
export const { sortAscending, sortDescending } = valueSlice.actions;
