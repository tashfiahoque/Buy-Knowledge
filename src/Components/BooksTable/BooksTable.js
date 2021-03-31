import React from 'react';
import { Link } from 'react-router-dom';
import './BooksTable.css';

const BooksTable = (props) => {


    const deleteItem = id => {
        fetch(`http://localhost:5055/deleteBook/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.manageBooks.map(item => <tr key={item._id}>
                            <th scope="row">{item.bookName}</th>
                            <td>{item.author}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={`/editBooks/${item._id}`}>Edit</Link>
                                <button onClick={() => deleteItem(item._id)}>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    );
};

export default BooksTable;