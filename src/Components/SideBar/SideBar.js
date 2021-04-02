import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleLogOut = () => {
        setLoggedInUser({});
    }
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-title">
                    <h1>BOOK SHOP</h1>
                </div>
                <div className="sidebar-nav">
                    <nav className="nav flex-column">
                        <Link className="nav-link" aria-current="page" to="/manageBooks">
                            <FontAwesomeIcon icon={faThLarge} color="white" size="1x" />
                            &nbsp;&nbsp;Manage books</Link>
                        <Link className="nav-link active" to="/addBooks">
                            <FontAwesomeIcon icon={faPlus} color="white" size="1x" />
                            &nbsp;&nbsp;Add Book
                        </Link>
                        <Link className="nav-link" to="/editBooks">
                            <FontAwesomeIcon icon={faPen} color="white" size="1x" />
                            &nbsp;&nbsp;Edit Book
                        </Link>
                        <Link className="nav-link" to="/">
                            <FontAwesomeIcon icon={faHome} color="white" size="1x" />
                            &nbsp;&nbsp;Home
                        </Link>
                        {loggedInUser &&
                            <li className="nav-item active onClick={signOut}">
                                <Link className="nav-link" to="/" onClick={handleLogOut}>
                                    <FontAwesomeIcon icon={faSignOutAlt} color="white" size="1x" />
                                    &nbsp;&nbsp;Log out
                                </Link>
                            </li>}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default SideBar;