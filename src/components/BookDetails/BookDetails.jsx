import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {

    const {bookId} = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    
    const book = data.find(book => book.bookId === id);

    // const {bookId, currentBookId, image} = book;




    return (
        <div className="shadow-sm card card-side bg-base-100 my-7">
            <figure className='px-10 py-8 bg-gray-100 rounded-2xl w-[573px] h-[711px]'>
                <img
                className='h-[500px] w-[400px] rounded-xl'
                src={book.image}
                alt={book.bookName}/>
            </figure>
            <div className="card-body">
                <h1 className="text-4xl font-bold">{book.bookName}</h1>
                <p>By : {book.author}</p>
                <p>{book.category}</p>
                {/* <p className='text-sm'><b>Review: </b>{book.review}</p> */}
               
                <p>{book.tags}</p>
              
                <p>{book.rating}</p>
                
                <div className="justify-start card-actions">
                    <button className="btn btn-primary">Read</button>
                    <button className="btn btn-primary">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;