import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './ProceedCheckOut.css';
import { useForm } from 'react-hook-form';
import Orders from '../Orders/Orders';



const ProceedCheckOut = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const { id } = useParams();
    const [selectedBooks, setSelectedBooks] = useState([]);
    const [placedOrder, setPlacedOrder] = useState();

    useEffect(() => {
        fetch(`http://localhost:5055/book/${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectedBooks(data);
            })
    }, [id])
    const { bookName, author, price } = selectedBooks;

    const onSubmit = data => {
        const orderDetails = { ...loggedInUser, bookName: bookName, author: author, price: price, formData: data, orderTime: new Date() };
        fetch('http://localhost:5055/addOrder', {
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
        <div>
            <Header />

            <h4>you have selected{bookName}</h4>
            <h1>Please, give your information to place your order</h1>

            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                {errors.name && <span className="error">Name is required</span>}

                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                {errors.email && <span className="error">Email is required</span>}

                <input name="address" ref={register({ required: true })} placeholder="Your Address" />
                {errors.address && <span className="error">Address is required</span>}

                <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
                {errors.phone && <span className="error">Phone Number is required</span>}

                <input type="submit" />
            </form>



        </div>
    );
};

export default ProceedCheckOut;