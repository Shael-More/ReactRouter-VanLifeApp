import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='flex justify-center items-center w-full h-[800px]'>
      <div className='p-5'>
        <h1 className='text-5xl font-bold mb-10'>Sorry, the page you were looking for was not found.</h1>

        <Link to={'..'}>
        <button className='font-semibold text-3xl bg-black text-white w-full py-5 rounded-xl'>Return to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
