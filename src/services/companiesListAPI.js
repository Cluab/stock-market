import KEY from './apiKEY';

const BASE_URL = ` https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=${KEY}`;

const getRocketsAsync = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export default getRocketsAsync;
