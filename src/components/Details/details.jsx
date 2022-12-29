function Details(props) {
    return ( <>
    <div>
        <img src="" alt="" />
        <h2>{props.name}</h2>
        <p>{props.revenue}</p>
    </div>
    <div>{props.name} BREAKDOWN - {props.date}</div>
        <div>
            <ul>
            <li><p>period</p> <span>{props.period}</span></li>
            <li><p>revenue</p> <span>{props.revenue}</span></li>
            <li><p>costOfRevenue</p> <span>{props.costOfRevenue}</span></li>
            <li><p>grossProfit</p> <span>{props.grossProfit}</span></li>
            <li><p>grossProfitRatio</p> <span>{props.grossProfitRatio}</span></li>
            <li><p>Earnings per share</p> <span>{props.esp}</span></li>
            </ul>
        </div>
    </> );
}

export default Details;
