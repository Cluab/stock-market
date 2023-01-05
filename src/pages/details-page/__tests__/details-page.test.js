import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import DetailsPage from '../details-page';
import '@testing-library/jest-dom/extend-expect';

const middleware = [thunk];
const initialState = [[{
  symbol: 'AAPL',
  date: '2022-09-24',
  revenue: 394328000000,
  costOfRevenue: 223546000000,
  costAndExpenses: 274891000000,
  ebitda: 133138000000,
  grossProfit: 170782000000,
  grossProfitRatio: 0.43309630561360085,
  operatingExpenses: 51345000000,
  operatingIncome: 119437000000,
  eps: 6.15,
  operatingIncomeRatio: 0.30288744395528594,
}]];
const mockStore = configureMockStore(middleware);
const store = mockStore({ stocks: initialState });
describe('CompaniesPage component', () => {
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <DetailsPage test="AAPL" />
          </Router>
        </Provider>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the Header and CompaniesList components', () => {
    const { getByTestId } = render(
      <Provider store={store}><Router><DetailsPage test="AAPL" /></Router></Provider>,
    );
    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('Details')).toBeInTheDocument();
  });
});
