import logo from '/public/images/logo.png'
export const Header = () => (
    <header className="header">
            <div className="logo-container"><img src={logo} /></div>
            <div className="main-nav">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            About us
                        </li>
                        <li>
                            Contact us
                        </li>
                        <li>
                            Cart
                        </li>
                    </ul>
            </div>
    </header>
)
