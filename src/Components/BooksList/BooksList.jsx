import React from 'react';

function BookList() {
    return (
        <div className="book-list">
            <h2>Book List</h2>
            <ul>
                <li>Book 1</li>
                <li>Book 2</li>
                <li>Book 3</li>
                {/* Добавьте элементы списка с вашими книгами */}
            </ul>
        </div>
    );
}

export default BookList;
