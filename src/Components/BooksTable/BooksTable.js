import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './BooksTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const BooksTable = (props) => {
    const history = useHistory();

    const deleteItem = id => {
        fetch(`https://apple-pudding-21202.herokuapp.com/deleteBook/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Deleted Successfully')
                    history.push('/addBooks')
                }
            })
    }
    return (
        <>
            <div className="manage-books-title">
                <h1>Manage Books</h1>
            </div>
            <table className="table">
                <thead className="list-header">
                    <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.manageBooks.map(item => <tr key={item._id} className="font-change">
                            <th><h5>{item.bookName}</h5></th>
                            <td><h5>{item.author}</h5></td>
                            <td><h5>{item.price}</h5></td>
                            <td>
                                <button onClick={() => deleteItem(item._id)} className="delete-button">
                                    <FontAwesomeIcon icon={faTrashAlt} color="red" size="1x" /></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    );
};

export default BooksTable;