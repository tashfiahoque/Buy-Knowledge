import React from 'react';

const OrderDetails = (props) => {

    const { formData, orderTime } = props.res;
    const { name, address, phone } = formData;
    return (
        <>
            <tr>
                <td><h5>{name}</h5></td>
                <td><h5>{address}</h5></td>
                <td><h5>{phone}</h5></td>
                <td><h5>{orderTime}</h5></td>
            </tr>
        </>
    );
};

export default OrderDetails;