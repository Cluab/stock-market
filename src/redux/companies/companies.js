import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getStocksValueAsync from '../../services/stocksValueAPI';

const GET_VALUE = 'stockMarket/VALUE/GET_VALUE';

export const getValue = createAsyncThunk(GET_VALUE, async (stockes) => {
  const res = await getStocksValueAsync(stockes);
  return res;
});

const valueSlice = createSlice({
  name: 'stockes',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(getValue.fulfilled, (state, { payload }) => {
      const value = [payload[0]];
      console.log(state);
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
        operatingIncomeRatio: value.operatingIncomeRatio,
      })));
    });
  },
});

export default valueSlice.reducer;
