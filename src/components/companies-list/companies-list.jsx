import Header from "../header/header";

function CompaniesList() {
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