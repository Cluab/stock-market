import getCompaniesValueAsync from '../../services/companiesValueAPI';

const GET_VALUE = 'stockMarket/VALUE/GET_VALUE';

export const getValue = createAsyncThunk(GET_VALUE, async (companies) => {
  const res = await getCompaniesValueAsync(companies);
  return res.data;
});

const valueSlice = createSlice({
  name: 'companies',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(getValue.fulfilled, (_, action) => {
      const arr = [];
      action.payload.forEach((comp) => {
        arr.push(
          comp.map((value) => ({
            revenue: value.revenue,
            name: value.symbol,
            date: value.date,
          }))
        );
      });

      return arr;
    });
  },
});

export default valueSlice.reducer;
