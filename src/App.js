import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CompaniesPage from './pages/companies-page/Companies-page';
import DetailsPage from './pages/details-page/details-page';
import { getValue } from './redux/companies/companies';

const companiesLIST = [
  'JPM',
  'ETH',
  'AAPL',
  'MSFT',
  'AEF',
  'FULO',
  'GOOG',
  'AMZN',
  'TSLA',
  'NVDA',
  'MA'];
function App() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks);

  useEffect(() => {
    if (stocks.length === 11) return;
    dispatch(getValue(companiesLIST[stocks.length]));
  }, [dispatch, stocks.length]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
          stocks.length ? <CompaniesPage /> : <h1 className="loading">Loading...</h1>
}
          />
          <Route path="/details/:symbol" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
