import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './ProceedCheckOut.css';
import { useForm } from 'react-hook-form';
import Spinner from '../Spinner/Spinner';


const ProceedCheckOut = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const { id } = useParams();
    const [selectedBooks, setSelectedBooks] = useState([]);
    const [placedOrder, setPlacedOrder] = useState();

    useEffect(() => {
        fetch(`https://apple-pudding-21202.herokuapp.com/book/${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectedBooks(data);
            })
    }, [id])
    const { bookName, author, price, imageURL } = selectedBooks;

    const onSubmit = data => {
        const orderDetails = { ...loggedInUser, bookName: bookName, author: author, price: price, formData: data, orderTime: new Date() };
        fetch('https://apple-pudding-21202.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setPlacedOrder(data);
                }
            })
        history.push('/orders')
    }

    return (
        <>
            <Header />

            <div className="container">
                {!selectedBooks ? <Spinner />
                    :
                    <div className="checkout">
                        <table className="table checkout-table">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Book Name</th>
                                    <th scope="col">Author Name</th>
                                    <th scope="col">price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th><img src={imageURL} alt={bookName} className="selected-img" /></th>
                                    <td><h5>{bookName}</h5></td>
                                    <td><h5>{author}</h5></td>
                                    <td><h5>{price}</h5></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
                <h1 className="text-decoration-underline text-center text-color">Please give your information before check-out</h1>
                <div className="d-flex justify-content-center align-items-center">
                    <form className="place-order-form" onSubmit={handleSubmit(onSubmit)}>

                        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                        {errors.name && <span className="error">Name is required</span>}

                        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                        {errors.email && <span className="error">Email is required</span>}

                        <input name="address" ref={register({ required: true })} placeholder="Your Address" />
                        {errors.address && <span className="error">Address is required</span>}

                        <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
                        {errors.phone && <span className="error">Phone Number is required</span>}

                        <input type="submit" value="Check-out" className="checkout-button" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProceedCheckOut;