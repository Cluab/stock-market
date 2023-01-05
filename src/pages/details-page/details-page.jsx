import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Details from '../../components/Details/details';
import Header from '../../components/header/header';

function DetailsPage({ test }) {
  const T = true;
  const stocks = useSelector((state) => state.stocks);

  let { symbol } = useParams();

  if (symbol === undefined) {
    symbol = test;
  }

  return (
    <>
      <Header showBackButton={T} />
      <Details props={stocks} symbol={symbol} />
    </>
  );
}
DetailsPage.defaultProps = {
  test: undefined,
};

DetailsPage.propTypes = {
  test: PropTypes.oneOfType([
    PropTypes.string,
  ]),
};

export default DetailsPage;
