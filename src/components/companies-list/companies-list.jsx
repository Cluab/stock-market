import { getValue } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";

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

 const companies = []
        useEffect{() => {
            if (companies.length === 10) return
            companiesLIST.forEach(company => {
            dispatch(getValue(company))})
        }, []};
    return ( 
        <><div>
                <img src="" alt="" />
                <h2>{companies[0].title}</h2>
                <span>{companies[0].value}</span>
            </div>
            <div> <p>US STOCK MARKET</p></div>
            <div>
                {
                    companies.map((company, index) => {
                        return (
                            <div key={index}>
                                <img src={company.logo} alt={company.title} />
                                <h2>{company.title}</h2>
                                <span>{company.value}</span>
                            </div>
                        )
                    }
                    )}
            </div>
     </>);
}

export default CompaniesList;