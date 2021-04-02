import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import SideBar from '../SideBar/SideBar';
import './AddBooks.css';

const AddBooks = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const history = useHistory();

    const onSubmit = data => {
        const bookData = {
            bookName: data.book,
            author: data.author,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://apple-pudding-21202.herokuapp.com/addBook`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => {
                if (res.status === 200) {
                    history.push('/manageBooks')
                }
            })

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
                <div className="row">
                    <div className="col-md-4">
                        <SideBar />
                    </div>
                    <div className="col-md-8 ">
                        <div className="addBook-title">
                            <h1>Add Book</h1>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="addBook-content">
                                <div className="row">
                                    <div className="col-md-5 col-12">
                                        <label htmlFor="book">Book Name</label>
                                        <input id="book" name="book" ref={register({ required: true })} placeholder="Enter Book Name" />
                                        <label htmlFor="author">Author Name</label>
                                        <input id="author" name="author" ref={register({ required: true })} placeholder="Enter Author Name" />
                                    </div>
                                    <div className="col-md-5 col-12">
                                        <label htmlFor="price">Price</label>
                                        <input id="price" name="price" type="quantity" ref={register({ required: true })} placeholder="Enter Price" />
                                        <label htmlFor="photo">Add Book Cover Photo</label>
                                        <input id="photo" name="exampleRequired" type="file" onChange={handleImageUpload} ref={register({ required: true })} placeholder="Upload Photo" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-center save-button">
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddBooks;