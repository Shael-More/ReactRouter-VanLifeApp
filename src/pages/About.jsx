import React from 'react';
import bgImg from '../assets/images/aboutHero.png';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className='bg-[#FFF7ED]'>
      <img className='h-[400px] w-full ' src={bgImg} alt='about-hero-image' />
      <div className='p-6'>
        <h1 className='text-3xl font-bold my-6'>
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className='mb-4'>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className='p-9 bg-[#FFCC8D] mx-6 mb-12 font-bold text-2xl'>
        <h2 className='mb-6'>
          Your destination is waiting. <br /> Your van is ready.
        </h2>
        <Link
          to={'/vans'}
          className='text-white font-semibold bg-black text-sm p-2 rounded-xl'
        >
          Explore our vans
        </Link>
      </div>
    </div>
  );
};

export default About;
