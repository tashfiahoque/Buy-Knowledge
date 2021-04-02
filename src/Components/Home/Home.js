import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';
import './Home.css';

const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://apple-pudding-21202.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <>
            <Header />
            {!books.length ? <Spinner />
                :
                <div className="books-card">
                    <div className="container">
                        <div className="row">
                            {
                                books.map(book => <BookCard key={book._id} book={book} />)
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Home;