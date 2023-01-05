import { useSelector } from 'react-redux';
import CompaniesList from '../../components/companies-list/companies-list';
import Header from '../../components/header/header';
import './Companies-page.scss';

function CompaniesPage() {
  const stocks = useSelector((state) => state.stocks);

  return (
    <>
      <Header showBackButton={false} />
      <CompaniesList props={stocks} />
    </>
  );
}

export default CompaniesPage;
