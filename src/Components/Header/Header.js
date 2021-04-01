import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
const Header = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const handleLogOut = () => {
        setLoggedInUser({});
    }
    return (
        <>

            <div>
                <nav className="navbar navbar-expand-lg navbar-light" id="nav">
                    <div className="container">
                        <Link className="navbar-brand logo" to="/"><h1>BUY KNOWLEDGE</h1></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavCollapse}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse menu`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 links">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/orders">Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addBooks">Admin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/deals">Deals</Link>
                                </li>
                                {loggedInUser.name && <h5>{loggedInUser.name}&nbsp;&nbsp;</h5>}
                                {loggedInUser.name || loggedInUser.email
                                    ? <li className="nav-item active onClick={signOut}">
                                        <Link className="nav-link" to="/" onClick={handleLogOut}>Log out</Link>
                                    </li>
                                    : <li className="nav-item active">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
