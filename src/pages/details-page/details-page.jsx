import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Details from '../../components/Details/details';
import Header from '../../components/header/header';

function DetailsPage() {
  const T = true;
  const stocks = useSelector((state) => state.stocks);
  const { symbol } = useParams();
  return (
    <>
      <Header showBackButton={T} />
      <Details props={stocks} symbol={symbol} />
    </>
  );
}

export default DetailsPage;
