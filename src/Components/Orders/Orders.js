import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Orders.css';

const Orders = () => {
    const [checkOutData, setCheckOutData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch('https://apple-pudding-21202.herokuapp.com/orderInfo?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setCheckOutData(data))
    }, [loggedInUser.email])
    console.log(checkOutData);
    return (
        <div>
            <Header />
            <Link to='/'>For product selection go to homepage</Link>
            <h4>you have {checkOutData.length} orders</h4>
            {checkOutData.map(res => <h4>{res.bookName}</h4>)}
        </div>
    );
};

export default Orders;