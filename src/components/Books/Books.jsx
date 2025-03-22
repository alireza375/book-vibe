import React, { useEffect, useState } from 'react';

const Books = () => {

    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetch('../../../public/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books: {books.length}</h2>
            {/* <p>{books.length}</p> */}
        </div>
    );
};

export default Books;