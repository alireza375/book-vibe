import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {

    const {bookId} = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    
    const book = data.find(book => book.bookId === id);

    // const {bookId, currentBookId, image} = book;

    const handleAddToWishlist = () => {
        
    }

    const handleMarkAsRead = () => {
        
    }

    // console.log(book);


    return (
        <div className="shadow-sm card card-side bg-base-100 my-7">
            <figure className='px-10 py-8 bg-gray-100 flex-shrink-0 rounded-2xl w-[573px] h-[711px]'>
                <img
                className='h-[500px] w-[400px] rounded-xl'
                src={book.image}
                alt={book.bookName}/>
            </figure>
            <div className='pl-10'>
                <h1 className="text-4xl font-bold">{book.bookName}</h1>
                <p className='pt-3 pb-3 text-2xl'>By : {book.author}</p>
                <div className='border'></div>
                <p className='pt-3 pb-3 text-xl'>{book.category}</p>
                {/* <p className='text-sm'><b>Review: </b>{book.review}</p> */}
                <div className='border'></div>
                <div className='pt-3 pb-3 text-sm'>
                    <p><b>Review: </b>{book.review}</p>
                </div>
                <div className="flex gap-3 pb-6">
                <b>Tags: </b>
                        {
                            book.tags.map((tag, index) =>  <button key={index} className="font-bold text-green-400 btn btn-xs">#{tag}</button>)
                        }
                    </div>
                <div className='border'></div>

                <div className='gap-8 pt-3 pb-3 '>
                    <p className='pb-2'>Number of pages: <b>{book.totalPages}</b></p>
                    <p className='pb-2'>Publisher: <b>{book.publisher}</b></p>
                    <p className='pb-2'>Year of publication: <b>{book.yearOfPublishing}</b></p>
                    <p className='pb-2'>Rating: <b>{book.rating}</b></p>
                   
                </div>
                
                <div className="justify-start gap-6 pt-6 card-actions ">
                    <button onClick={handleMarkAsRead} className="btn btn-outline">Mark as Read</button>
                    <button onClick={handleAddToWishlist} className="btn btn-outline">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;