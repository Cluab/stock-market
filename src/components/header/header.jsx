function Header(props) {
    return ( 
        <header>
            {
                props.showBackButton ?
                <button onClick={props.onBackButtonClick}>Back</button> :
                null
            }
            <h1>{props.title}</h1>
        </header>
     );
}

export default Header;