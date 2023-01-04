import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import Header from '../header';
import valueReducer from '../../../redux/companies/companies';

const store = configureStore({ reducer: { stock: valueReducer } });
const T = true;
describe('header component test cases', () => {
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Header
              showBackButton={T}
            />
          </Router>
        </Provider>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test for back icon visibility', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header
            showBackButton={T}
          />
        </Router>

      </Provider>,
    );
    const icon = document.querySelector('.fa-solid');

    expect(icon).toBeVisible();
  });

  test('test for back icon visibility', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header
            showBackButton={false}
          />
        </Router>

      </Provider>,
    );
    const icon = document.querySelector('.fa-solid');

    expect(icon).toBe(null);
  });
});
