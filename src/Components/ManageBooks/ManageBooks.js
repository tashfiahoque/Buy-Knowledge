import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BooksTable from '../BooksTable/BooksTable';
import SideBar from '../SideBar/SideBar';
import './ManageBooks.css';

const ManageBooks = () => {
    const [manageBooks, setManageBooks] = useState([]);
    useEffect(() => {
        fetch('https://apple-pudding-21202.herokuapp.com/manage')
            .then(res => res.json())
            .then(data => setManageBooks(data))
    }, [])


    return (
        <>
            <div className="add-books">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <SideBar />
                        </div>
                        <div className="col-md-8">
                            <BooksTable manageBooks={manageBooks} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageBooks;