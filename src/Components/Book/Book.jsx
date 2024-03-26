import React from 'react';
import './Book.css'

function Book() {

    return (
        <div className="book">
            <div className="book-image">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQakHOfrZN4cKsNq6Lpu9L435U9q4l3OJMA&usqp=CAU' alt='book' />
            </div>
            <div className="book-details">
                <h3>Title: </h3>
                <p>Author: </p>
                <p>Year: </p>
            </div>
        </div>
    );
}

export default Book;
