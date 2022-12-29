import CompaniesList from "../../components/companies-list/companies-list";
import Header from "../header/header";

function CompaniesPage() {
    const companies = []
    return ( 
        <><Header props={{
            showBackButton: false,
            title: "Companies",
        }} /><div>
                <img src="" alt="" />
                <h2>{companies[0].title}</h2>
                <span>{companies[0].value}</span>
            </div>
            <div> <p>US STOCK MARKET</p></div>
         <CompaniesList/>
     </>);
}

export default CompaniesPage;