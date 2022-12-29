import { KEY } from '../config/financialModelingPrepAPIKey';
const getCompaniesValueAsync = async (comp) => {
  const res = await fetch(
    `https://financialmodelingprep.com/api/v3/income-statement/${comp}?limit=120&apikey=${KEY}}`
  );
  return res.json();
};

export default getCompaniesValueAsync;
