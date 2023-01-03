import CompaniesList from '../../components/companies-list/companies-list';
import Header from '../../components/header/header';
import './Companies-page.scss';

function CompaniesPage() {
  const companies = [{
    date: '2021-06-30',
    symbol: 'ETH',
    reportedCurrency: 'USD',
    period: 'FY',
    revenue: 685169000,
    costOfRevenue: 292062000,
    grossProfit: 393107000,
    grossProfitRatio: 0.5737372823347232,
    eps: 2.395122340637848,
  },
  ];
  return (
    <>
      <Header showBackButton={false} />
      <div className="main-comp-section">
        <span className="fa-solid fa-money-bill-trend-up" />
        <div className="main-comp-name">
          <h2>{companies[0].symbol}</h2>
          <span>
            {companies[0].revenue}
            /
            Revenue
          </span>
        </div>
      </div>
      <div className="main-page-bar">
        <p>US STOCK MARKET</p>
      </div>
      <CompaniesList />
    </>
  );
}

export default CompaniesPage;
