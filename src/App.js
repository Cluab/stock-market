import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompaniesPage from './pages/companies-page/Companies-page';
import DetailsPage from './pages/details-page/details-page';

function App() {
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
