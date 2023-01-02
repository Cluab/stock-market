import CompaniesList from '../../components/companies-list/companies-list';
import Header from '../../components/header/header';

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
  const T = true;
  return (
    <>
      <Header showBackButton={T} />
      <div>
        <img src="" alt="" />
        <h2>{companies[0].symbol}</h2>
        <span>{companies[0].revenue}</span>
      </div>
      <div>
        {' '}
        <p>US STOCK MARKET</p>
      </div>
      <CompaniesList />
    </>
  );
}

export default CompaniesPage;
