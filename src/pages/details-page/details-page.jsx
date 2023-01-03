import Details from '../../components/Details/details';
import Header from '../../components/header/header';

function DetailsPage() {
  const T = true;
  return (
    <>
      <Header showBackButton={T} />
      <Details />
    </>
  );
}

export default DetailsPage;
