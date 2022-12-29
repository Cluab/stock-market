import valueReducer from './valueSlice';

const store = configureStore({
  reducer: {
    companies: valueReducer,
  },
});

export default store;
