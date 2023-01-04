import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './companies.scss';

function CompaniesList({ props }) {
  let stocks = props;
  const mainStock = props;
  stocks = stocks.slice(1);
  return (
    <>
      <Link to={`/details/${mainStock[0][0].symbol}`}>
        <div className="main-comp-section">
          <span className="fa-solid fa-money-bill-trend-up" />
          <div className="main-comp-name">
            <h2>{mainStock[0][0].symbol}</h2>
            <span>
              {mainStock[0][0].revenue}
              /
              Revenue
            </span>
          </div>
        </div>
      </Link>
      <div className="main-page-bar">
        <p>US STOCK MARKET</p>
      </div>
      <div className="comp-name-list">
        {
        stocks.map((stock) => (
          <Link key={stock[0].symbol} to={`/details/${stock[0].symbol}`}>
            <div>
              <span className="fa-solid arrow-stock fa-circle-arrow-right" />
              <i className="fa-solid fa-money-bill-trend-up" />
              <h3 data-testid="test-symbol">{stock[0].symbol}</h3>
              <span data-testid="test-revenue">{stock[0].revenue}</span>
            </div>
          </Link>
        ))
}
      </div>

    </>

  );
}

CompaniesList.propTypes = {
  props: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
};

export default CompaniesList;
