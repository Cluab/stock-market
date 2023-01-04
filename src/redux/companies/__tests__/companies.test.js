import { createAsyncThunk, createSlice, configureStore } from '@reduxjs/toolkit';
import getStocksValueAsync from '../../../services/stocksValueAPI';
import { getValue } from '../companies';

describe('async thunk action', () => {
  it('dispatches pending and fulfilled actions', async () => {
    const mockData = { symbol: 'AAPL', date: '2022-01-01', revenue: 100 };
    const mockGetStocksValueAsync = jest.spyOn(getStocksValueAsync, 'default');
    mockGetStocksValueAsync.mockImplementation(() => Promise.resolve(mockData));

    const store = configureStore({
      reducer: {
        stocks: getValue.reducer,
      },
    });

    await store.dispatch(getValue());

    expect(store.getActions()).toEqual([
      { type: 'stockMarket/VALUE/GET_VALUE/pending' },
      { type: 'stockMarket/VALUE/GET_VALUE/fulfilled', payload: mockData },
    ]);
  });
});
