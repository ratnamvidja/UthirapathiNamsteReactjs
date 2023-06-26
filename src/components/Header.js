import { useState } from 'react'
import logo from '/public/images/logo.png'
export const Header = () => {
    const [userLgoin , setUserLogin] = useState("Login")
    return <header className="header">
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
                <button className='login-btn' onClick={() => {
                   (userLgoin==="Login")?setUserLogin("Logout") : setUserLogin("Login")

                }}>{userLgoin}</button>
            </ul>
    </div>
</header>
}
    
export default Header
