import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './companies.scss';

function CompaniesList() {
  let stocks = useSelector((state) => state.stocks);
  stocks = stocks.slice(1);
  return (

    <div className="comp-name-list">
      {
                    stocks.map((stock) => (
                      <Link key={stock[0].symbol} to={`/details/${stock[0].symbol}`}>
                        <div>
                          <i className="fa-solid fa-money-bill-trend-up" />
                          <h3>{stock[0].symbol}</h3>
                          <span>{stock[0].revenue}</span>
                        </div>
                      </Link>
                    ))
}
    </div>

  );
}

export default CompaniesList;
