import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './details.scss';

function Details() {
  const { symbol } = useParams();
  const stocks = useSelector((state) => state.stocks);
  let stock;
  stocks.forEach((stocked) => {
    if (stocked[0].symbol === symbol) { stock = stocked; }
  });

  const {
    revenue, ebitda, operatingIncome, operatingIncomeRatio,
    operatingExpenses, date, costAndExpenses, costOfRevenue, grossProfit, grossProfitRatio, eps,
  } = stock[0];
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
        &nbsp;
        BREAKDOWN
        &nbsp;
        {date}
      </div>
      <div>
        <ul className="comp-details">
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
            <p>costAndExpenses</p>
            {' '}
            <span>{costAndExpenses}</span>
          </li>

          <li>
            <p>ebitda</p>
            {' '}
            <span>{ebitda}</span>
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
            <p>operatingExpenses</p>
            {' '}
            <span>{operatingExpenses}</span>
          </li>
          <li>
            <p>operatingIncome</p>
            {' '}
            <span>{operatingIncome}</span>
          </li>
          <li>
            <p>Earnings per share</p>
            {' '}
            <span>{eps}</span>
          </li>
          <li>
            <p>OIR</p>
            {' '}
            <span>{operatingIncomeRatio}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Details;
