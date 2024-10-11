import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className='w-full h-[900px] max-h-600 bg-home bg-cover
     bg-no-repeat bg-center'
    >
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-white mt-30 text-wrap py-10 px-20'>
          You got the travel plans, we got the travel vans.
        </h1>
        <p className='text-white text-3xl py-10 px-20 m-15 text-wrap'>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to={'/vans'}
          className='bg-[#FF8C38] text-white font-bold px-20 py-2 rounded-xl mt-10'
        >
          Find your van
        </Link>
      </div>
    </div>
  );
};

export default Home;

//  <h1>Hello, React Router 🎆🎉 </h1>
