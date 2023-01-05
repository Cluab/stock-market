import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { valueSlice, sortAscendingAction, sortDescendingAction } from '../companies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('sortAscending action', () => {
  it('dispatches the correct action', () => {
    const expectedActions = [
      { type: 'stocks/sortAscending' },
    ];
    const store = mockStore({});
    store.dispatch(valueSlice.actions.sortAscending());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches the correct action and payload', () => {
    const initialState = [[{ symbol: 'GOOG', revenue: 50 }], [{ symbol: 'MSFT', revenue: 75 }], [{ symbol: 'AAPL', revenue: 100 }]];
    const expectedState = [[{ symbol: 'AAPL', revenue: 100 }], [{ symbol: 'MSFT', revenue: 75 }], [{ symbol: 'GOOG', revenue: 50 }]];
    const store = mockStore({ stocks: initialState });
    const actualState = sortAscendingAction(store.getState().stocks);
    expect(actualState).toEqual(expectedState);
  });

  // write a test for the sortDescending action
  it('dispatches the correct action', () => {
    const expectedActions = [
      { type: 'stocks/sortDescending' },
    ];
    const store = mockStore({});
    store.dispatch(valueSlice.actions.sortDescending());
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('dispatches the correct action and payload', () => {
    const initialState = [
      [{ symbol: 'AAPL', revenue: 100 }],
      [{ symbol: 'GOOG', revenue: 50 }],
      [{ symbol: 'MSFT', revenue: 75 }],
    ];
    const expectedState = [
      [{ symbol: 'GOOG', revenue: 50 }],
      [{ symbol: 'MSFT', revenue: 75 }],
      [{ symbol: 'AAPL', revenue: 100 }],
    ];
    const store = mockStore({ stocks: initialState });
    const actualState = sortDescendingAction(store.getState().stocks);
    expect(actualState).toEqual(expectedState);
  });
});
