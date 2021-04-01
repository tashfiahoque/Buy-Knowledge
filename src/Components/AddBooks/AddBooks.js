import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';
import './AddBooks.css';

const AddBooks = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const bookData = {
            bookName: data.book,
            author: data.author,
            price: data.price,
            imageURL: imageURL
        };
        console.log(bookData);
        const url = `https://apple-pudding-21202.herokuapp.com/addBook`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '1296a13ce55bb34081ea80a01769e9d4');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <>
            <div className="add-books">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <SideBar />
                        </div>
                        <div className="col-md-8">
                            <h1>Add Book</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input name="book" ref={register({ required: true })} placeholder="Enter Book Name" />
                                <br />
                                <input name="author" ref={register({ required: true })} placeholder="Enter Author Name" />
                                <br />
                                <input name="price" type="quantity" ref={register({ required: true })} placeholder="Enter Price" />
                                <br />
                                <input name="exampleRequired" type="file" onChange={handleImageUpload} label="Add Book Cover Photo" ref={register({ required: true })} placeholder="Upload Photo" />
                                <br />
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AddBooks;