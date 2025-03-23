import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetch('../../../public/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    
    return (
        <div>
            {/* <h2 className="text-4xl font-bold text-center">Books: {books.length}</h2> */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
            </div>
            
        </div>
    );
};

export default Books;