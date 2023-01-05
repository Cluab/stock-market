import { configureStore } from '@reduxjs/toolkit';
import valueReducer from './companies/companies';

const store = configureStore({
  reducer: {
    stocks: valueReducer,
  },
});

export default store;
