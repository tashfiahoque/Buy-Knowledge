import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    return (
        <>
            <nav className="nav flex-column">
                <Link className="nav-link" aria-current="page" to="/manageBooks">Manage books</Link>
                <Link className="nav-link active" to="/addBooks">Add Book</Link>
                <Link className="nav-link" to="/editBooks">Edit Book</Link>
            </nav>
        </>
    );
};

export default SideBar;