// import { useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './companies.scss';

function CompaniesList() {
//   const companiesLIST = [
//     'ETH',
//     'GOGN',
//     '000540.SZ',
//     '603931.SS',
//     'JMG.L',
//     '067900.KS',
//     'ERM.L',
//     'BSP.AX',
//     'LVCLY'];

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
  {
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
  {
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
  {
    date: '2021-06-30',
    symbol: 'ETH',
    reportedCurrency: 'USD',
    period: 'FY',
    revenue: 685169000,
    costOfRevenue: 292062000,
    grossProfit: 393107000,
    grossProfitRatio: 0.5737372823347232,
    eps: 2.395122340637848,
  }];
  // useEffect{() => {
  //     if (companies.length === 10) return
  //     companiesLIST.forEach(company => {
  //     dispatch(getValue(company))})
  // }, []};
  return (

    <div className="comp-name-list">
      {
                    companies.map((company) => (
                      <Link key={company.symbol} to={`/details/${company.symbol}`} className="pet">
                        <div>
                          <i className="fa-solid fa-money-bill-trend-up" />
                          <h3>{company.symbol}</h3>
                          <span>{company.revenue}</span>
                        </div>
                      </Link>
                    ))
}
    </div>

  );
}

export default CompaniesList;
