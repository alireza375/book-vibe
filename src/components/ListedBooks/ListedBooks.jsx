import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList, getStoredWishList } from '../../utility/addToDB';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    
    
    const allBooks = useLoaderData();
    
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedWishList = getStoredWishList();
        
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        console.log(storedReadList, storedReadListInt, allBooks);


        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));


        setReadList(readBookList);
        setWishList(wishBookList);
        
    }, []);
    return (
        <div className="py-8 tabs tabs-lift">
            <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
            <div className="p-6 text-2xl tab-content bg-base-100 border-base-300">These are Read Books: {readList.length}
                <div className="grid grid-cols-3 gap-6 md:grid-cols-2 lg:grid-cols-1">
                {
                    readList.map(book => <Book key={book.bookId}book={book}></Book>)
                    
                }
                </div>
            </div>
           

            <input type="radio" name="my_tabs_3" className="tab" aria-label="Wish List Books" defaultChecked />
            <div className="p-6 text-2xl tab-content bg-base-100 border-base-300">These are Wish List Books: {wishList.length}
                <div>
                    {
                        wishList.map(book => <Book key={book.bookId}book={book}></Book>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default ListedBooks;