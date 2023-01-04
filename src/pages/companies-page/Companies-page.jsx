import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CompaniesList from '../../components/companies-list/companies-list';
import Header from '../../components/header/header';
import './Companies-page.scss';

function CompaniesPage() {
  const stocks = useSelector((state) => state.stocks);

  return (
    <>
      <Header showBackButton={false} />
      <Link to={`/details/${stocks[0][0].symbol}`}>
        <div className="main-comp-section">
          <span className="fa-solid fa-money-bill-trend-up" />
          <div className="main-comp-name">
            <h2>{stocks[0][0].symbol}</h2>
            <span>
              {stocks[0][0].revenue}
              /
              Revenue
            </span>
          </div>
        </div>
      </Link>
      <div className="main-page-bar">
        <p>US STOCK MARKET</p>
      </div>
      <CompaniesList props={stocks} />
    </>
  );
}

export default CompaniesPage;
