

function CompaniesList() {
    const companies = []
    return ( <div>
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
                    )}</div>
);
}

export default CompaniesList;