import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {

    const {bookId, bookName, author, image, rating, category, tags} = book;

    return (
        <Link to={`/book/${bookId}`}>
            <div className="order-2 p-5 shadow-sm card bg-base-100 w-96">
                <figure className="px-10 py-8 bg-gray-100 rounded-2xl">
                    <img className='h-[166px] w-[134px]'
                    src={image}
                    alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex gap-3">
                        {
                            tags.map((tag, index) =>  <button key={index} className="font-bold text-green-400 btn btn-xs">{tag}</button>)
                        }
                    </div>
                    
                    <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By : {author}</p>
                    <div className='border-2 border-dashed'></div>
                    <div className="justify-between card-actions">
                        <div className='font-bold text-left'>{category}</div>
                        <div className="badge badge-outline">{rating} </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;