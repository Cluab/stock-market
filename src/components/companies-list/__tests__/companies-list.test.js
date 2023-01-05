import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import CompaniesList from '../companies-list';
import valueReducer from '../../../redux/companies/companies';

const stock = [[{
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
}],
[{
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

const store = configureStore({ reducer: { stock: valueReducer } });

describe('companies component test cases', () => {
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <CompaniesList
              props={stock}
            />
          </Router>
        </Provider>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match with input data ', () => {
    render(
      <Provider store={store}>
        <Router>
          <CompaniesList
            props={stock}
          />
        </Router>
      </Provider>,
    );
    const stockSymbol = screen.getByTestId('test-symbol').textContent;
    const stockRevenue = screen.getByTestId('test-revenue').textContent;

    expect(stockSymbol).toBe(String(stock[0][0].symbol));
    expect(stockRevenue).toBe(String(stock[0][0].revenue));
  });
});
