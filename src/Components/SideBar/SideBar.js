import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './SideBar.css';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleLogOut = () => {
        setLoggedInUser({});
    }
    return (
        <>
            <nav className="nav flex-column">
                <Link className="nav-link" aria-current="page" to="/manageBooks">Manage books</Link>
                <Link className="nav-link active" to="/addBooks">Add Book</Link>
                <Link className="nav-link" to="/editBooks">Edit Book</Link>
                <Link className="nav-link" to="/">Home</Link>
                {loggedInUser &&
                    <li className="nav-item active onClick={signOut}">
                        <Link className="nav-link" to="/" onClick={handleLogOut}>Log out</Link>
                    </li>}
            </nav>
        </>
    );
};

export default SideBar;