// import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';
import './details.scss';

function Details() {
  const { symbol } = useParams();
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
    symbol: 'gp',
    reportedCurrency: 'USD',
    period: 'FY',
    revenue: 685169000,
    costOfRevenue: 292062000,
    grossProfit: 393107000,
    grossProfitRatio: 0.5737372823347232,
    eps: 2.395122340637848,
  }];

  const company = companies.find((c) => c.symbol === symbol);

  const {
    revenue, date, period, costOfRevenue, grossProfit, grossProfitRatio, eps,
  } = company;
  return (
    <>
      <div className="main-comp-section">
        <span className="fa-solid fa-money-bill-trend-up" />
        <div className="main-comp-name">
          <h2>{symbol}</h2>
          <span>
            {revenue}
            /
            Revenue
          </span>
        </div>
      </div>
      <div className="main-page-bar">
        {symbol}

        BREAKDOWN
        {date}
      </div>
      <div>
        <ul className="comp-details">
          <li>
            <p>period</p>
            {' '}
            <span>{period}</span>
          </li>
          <li>
            <p>revenue</p>
            {' '}
            <span>{revenue}</span>
          </li>
          <li>
            <p>costOfRevenue</p>
            {' '}
            <span>{costOfRevenue}</span>
          </li>
          <li>
            <p>grossProfit</p>
            {' '}
            <span>{grossProfit}</span>
          </li>
          <li>
            <p>grossProfitRatio</p>
            {' '}
            <span>{grossProfitRatio}</span>
          </li>
          <li>
            <p>Earnings per share</p>
            {' '}
            <span>{eps}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

// Details.propTypes = {
//   name: PropTypes.string.isRequired,
//   revenue: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   period: PropTypes.string.isRequired,
//   costOfRevenue: PropTypes.string.isRequired,
//   grossProfit: PropTypes.string.isRequired,
//   grossProfitRatio: PropTypes.string.isRequired,
//   esp: PropTypes.string.isRequired,
// };
export default Details;
