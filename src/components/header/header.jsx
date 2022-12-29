import "./header.sass";

function Header(props) {
    return ( 
        <header>
            {
                props.showBackButton ?
                <button onClick={props.onBackButtonClick}>Back</button> :
                null
            }
            <h1>stock market</h1>
        </header>
     );
}

export default Header;