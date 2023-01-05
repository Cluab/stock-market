import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import CompaniesPage from '../Companies-page';
import '@testing-library/jest-dom/extend-expect';

const middlewares = [thunk];
const initialState = [[{ symbol: 'GOOG', revenue: 50 }], [{ symbol: 'MSFT', revenue: 75 }], [{ symbol: 'AAPL', revenue: 100 }]];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ stocks: initialState });
describe('CompaniesPage component', () => {
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <CompaniesPage />
          </Router>
        </Provider>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the Header and CompaniesList components', () => {
    const { getByTestId } = render(
      <Provider store={store}><Router><CompaniesPage /></Router></Provider>,
    );
    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('companies-list')).toBeInTheDocument();
  });
});
