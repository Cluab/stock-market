import KEY from './apiKEY';

const getStocksValueAsync = async (comp) => {
  let value = [];
  const options = { method: 'GET' };
  await fetch(`https://financialmodelingprep.com/api/v3/income-statement/${comp}?limit=120&apikey=${KEY}`, options)
    .then((response) => response.json())
    .then((response) => { value = response; });
  return value;
};
export default getStocksValueAsync;
