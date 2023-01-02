import { configureStore } from '@reduxjs/toolkit';
import valueReducer from './companies/companies';

const store = configureStore({
  reducer: {
    companies: valueReducer,
  },
});

export default store;
