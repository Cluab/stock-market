import { useEffect } from "react";
import img from '../../assets/images/stock-market.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './companies.css'
function CompaniesList() {
    const companiesLIST = [
        "ETH",
        "GOGN",
        "000540.SZ",
        "603931.SS",
        "JMG.L",
        "067900.KS",
        "ERM.L",
        "BSP.AX",
        "LVCLY",]

 const companies = [	{
    date: "2021-06-30",
    symbol: "ETH",
    reportedCurrency: "USD",
    period: "FY",
    revenue: 685169000,
    costOfRevenue: 292062000,
    grossProfit: 393107000,
    grossProfitRatio: 0.5737372823347232,
    eps: 2.395122340637848,
}]
        // useEffect{() => {
        //     if (companies.length === 10) return
        //     companiesLIST.forEach(company => {
        //     dispatch(getValue(company))})
        // }, []};
    return ( 
        <><div className="H-company-container">
                <img src={img} alt="stock-market" />
                <span icon="fa-thin fa-money-bill-trend-up" />
                <h2>{companies[0].symbol}</h2>
                <span>{companies[0].revenue}</span>
            </div>
            <div> <p>US STOCK MARKET</p></div>
            <div>
                {
                    companies.map((company, index) => {
                        return (
                            <div key={index}>
                                <img src={img} alt={company.symbol} />
                                <h2>{company.symbol}</h2>
                                <span>{company.revenue}</span>
                            </div>
                        )
                    }
                    )}
            </div>
     </>);
}

export default CompaniesList;