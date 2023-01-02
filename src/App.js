import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompaniesPage from './pages/companies-page/Companies-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompaniesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
