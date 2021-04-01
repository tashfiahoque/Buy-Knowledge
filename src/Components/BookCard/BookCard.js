import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

import './BookCard.css';

const BookCard = (props) => {

    const { _id, bookName, author, price, imageURL } = props.book;
    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/selectBook/${id}`);
    }

    return (
        <>

            <div className="col-md-4">
                <img src={imageURL} alt={bookName} />
                <h1>{bookName}</h1>
                <h4>{author}</h4>
                <h5>{price}</h5>
                <button onClick={() => handleBook(_id)}>Buy Now</button>
            </div>

        </>
    );
};

export default BookCard;