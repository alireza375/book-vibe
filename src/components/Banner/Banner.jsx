import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="h-[650px] hero bg-base-200 my-10 rounded-2xl">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <img
                src= {bannerImg}
                className="h-[400px] w-[400px] max-w-sm rounded-lg shadow-2xl mr-10" />
                <div>
                <h1 className="text-5xl font-bold text-center">Books to freshen up your bookshelf</h1>
                <p className="py-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic debitis pariatur ratione sed aliquam voluptates harum eveniet incidunt quam in impedit distinctio nihil eligendi, assumenda perspiciatis error, explicabo laborum dolorum?
                </p>
                <button className="my-10 btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;