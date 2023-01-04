import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import Details from '../Details';
import valueReducer from '../../../redux/companies/companies';

const store = configureStore({ reducer: { stock: valueReducer } });
const stocks = [[{
  symbol: 'JPM',
  date: '2021-12-31',
  revenue: 121685000000,
  costOfRevenue: 0,
  costAndExpenses: 0,
  ebitda: 73047000000,
  grossProfit: 0,
  grossProfitRatio: 0,
  operatingExpenses: 0,
  operatingIncome: 0,
  eps: 15.39,
  operatingIncomeRatio: 0,
}]];

describe('companies component test cases', () => {
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Details props={stocks} symbol="JPM" />
          </Router>
        </Provider>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match with input data ', () => {
    render(
      <Provider store={store}>
        <Router>
          <Details props={stocks} symbol="JPM" />
        </Router>
      </Provider>,
    );
    const stockSymbol = screen.getByTestId('test-eps').textContent;
    const stockRevenue = screen.getByTestId('test-revenue').textContent;

    expect(stockSymbol).toBe(String(stocks[0][0].eps));
    expect(stockRevenue).toBe(String(stocks[0][0].revenue));
  });
});
