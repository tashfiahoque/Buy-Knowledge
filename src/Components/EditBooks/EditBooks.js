import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import SideBar from '../SideBar/SideBar';
import './EditBooks.css';

const EditBooks = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const [editBooks, setEditBooks] = useState([]);
    useEffect(() => {
        fetch(`https://apple-pudding-21202.herokuapp.com/book/${id}`)
            .then(res => res.json())
            .then(data => setEditBooks(data))
    }, [id])
    const onSubmit = data => {
        const bookData = {
            bookName: data.book,
            author: data.author,
            price: data.price
        }
        console.log(bookData);
    }
    return (
        <>
            <div className="edit-books">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <SideBar />
                        </div>
                        <div className="col-md-8">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input name="book" ref={register({ required: true })} defaultValue={editBooks.bookName} />
                                <br />
                                <input name="author" ref={register({ required: true })} defaultValue={editBooks.author} />
                                <br />
                                <input name="price" type="quantity" ref={register({ required: true })} defaultValue={editBooks.price} />
                                <br />

                                <input type="submit" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditBooks;