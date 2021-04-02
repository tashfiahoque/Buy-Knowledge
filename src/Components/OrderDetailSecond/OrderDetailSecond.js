import React from 'react';

const OrderDetailSecond = (props) => {
    const { bookName, author, price } = props.res;

    return (
        <>
            <tr>
                <td><h5>{bookName}</h5></td>
                <td><h5>{author}</h5></td>
                <td><h5>{price}</h5></td>
            </tr>
        </>
    );
};

export default OrderDetailSecond;