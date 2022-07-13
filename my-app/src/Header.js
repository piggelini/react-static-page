function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img className="nav-img" src={require("./react-logo.png")} width="40px" />
                <ul className="nav-items">
                    <li className='nav-item'>Pricing</li>
                    <li className='nav-item'>About</li>
                    <li className='nav-item'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

