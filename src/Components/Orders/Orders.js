import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import OrderDetails from '../OrderDetails/OrderDetails';
import OrderDetailSecond from '../OrderDetailSecond/OrderDetailSecond';
import Spinner from '../Spinner/Spinner';
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
        <>
            <Header />
            <div className="container">
                <div className="order-container d-flex justify-content-center align-items-center">
                    <Link to='/'><button className='go-back-button'>Wanna buy book??</button></Link>
                </div>
                <div className="d-flex justify-content-center align-items-center thankyou">
                    <h1>Thank you</h1>
                </div>
                {!checkOutData.length ? <Spinner />
                    :
                    <div className="place-order">
                        <p>Orderer Info</p>
                        <table className="table place-order-table">
                            <thead>
                                <tr>
                                    <th scope="col">Orderer Name</th>
                                    <th scope="col">Orderer Address</th>
                                    <th scope="col">Orderer Phone no</th>
                                    <th scope="col">Orderer order time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {checkOutData.map(res => <OrderDetails key={res._id} res={res} />)}
                            </tbody>
                        </table>
                        <div className="table-2">
                            <p>Order Details</p>
                            <table className="table place-order-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Ordered Book Name</th>
                                        <th scope="col">Ordered Author Name</th>
                                        <th scope="col">Amount to pay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {checkOutData.map(res => <OrderDetailSecond key={res._id} res={res} />)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Orders;