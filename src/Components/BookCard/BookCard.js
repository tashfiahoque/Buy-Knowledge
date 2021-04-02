import React from 'react';
import { useHistory } from 'react-router';
import './BookCard.css';

const BookCard = (props) => {

    const { _id, bookName, author, price, imageURL } = props.book;
    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/selectBook/${id}`);
    }

    return (
        <>
            <div className="col-md-4 single-item text-center my-4">
                <div className="card">
                    <img className="card-img-top img-fluid" src={imageURL} alt={bookName} />
                    <div className="card-body">
                        <h3>{bookName}</h3>
                        <h4>{author}</h4>
                        <h4>{price}</h4>
                        <button onClick={() => handleBook(_id)} className="buy-now-button">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookCard;