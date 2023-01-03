import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CompaniesPage from './pages/companies-page/Companies-page';
import DetailsPage from './pages/details-page/details-page';
import { getValue } from './Redux/companies/companies';

const companiesLIST = [
  'ETH',
  'TCRI',
  'AEF',
  'FULO',
  'LVCLY',
  'ACBA'];
function App() {
  const dispatch = useDispatch();
  const compStore = useSelector((state) => state.companies);

  useEffect(() => {
    if (compStore.length === 6) return;

    dispatch(getValue(companiesLIST[compStore.length]));
  }, [dispatch, compStore]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompaniesPage />} />
        <Route path="/details/:symbol" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
