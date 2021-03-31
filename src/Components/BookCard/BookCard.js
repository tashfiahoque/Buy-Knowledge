import React from 'react';

const BookCard = (props) => {

    const { _id, bookName, author, price, imageURL } = props.book;
    return (
        <>

            <div className="col-md-4">
                <img src={imageURL} alt={bookName} />
                <h1>{bookName}</h1>
                <h4>{author}</h4>
                <h5>{price}</h5>
                <button>Buy Now</button>
            </div>

        </>
    );
};

export default BookCard;