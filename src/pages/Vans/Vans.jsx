import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useLoaderData } from 'react-router-dom';
import { getVans } from '../../api';
export const loader = async () => {
  return getVans();
};

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const vans = useLoaderData();
  const typeFilter = searchParams.get('type');

  const displayFilteredVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;


  if (error) {
    return (
      <h1 className='text-3xl font-bold text-center my-10'>
        There was an error: {error.message}
      </h1>
    );
  }
  return (
    <>
      <h1 className='text-3xl font-bold m-5'>Explore our van options</h1>

      <nav className='flex gap-4 p-5 text-2xl'>
        <button
          className={`${
            typeFilter === 'simple' ? 'bg-[#FF8C38]' : ''
          } hover:bg-[#FF8C38] p-2`}
          onClick={() => setSearchParams({ type: 'simple' })}
        >
          Simple
        </button>
        <button
          className={` ${
            typeFilter === 'rugged' ? 'bg-[#6ee7b7] text-white' : ''
          }hover:bg-[#6ee7b7] p-2`}
          onClick={() => setSearchParams({ type: 'rugged' })}
        >
          Rugged
        </button>
        <button
          className={`${
            typeFilter === 'luxury' ? 'bg-[#0891b2] text-white' : ''
          }hover:bg-[#0891b2] p-2`}
          onClick={() => setSearchParams({ type: 'luxury' })}
        >
          Luxury
        </button>
        {typeFilter ? (
          <button
            className={`hover:bg-[#f5d0fe] p-2`}
            onClick={() => setSearchParams({})}
          >
            Clear Filter
          </button>
        ) : null}
      </nav>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
        {displayFilteredVans &&
          displayFilteredVans.length > 0 &&
          displayFilteredVans.map((van) => (
            <div key={van.id} className='m-5 w-[300px]'>
              <Link
                to={van.id}
                state={{
                  search: `?${searchParams.toString()}`,
                  type: typeFilter,
                }}
              >
                <img
                  src={van.imageUrl}
                  alt={van.name}
                  className='h-[300px] w-full rounded-xl mb-3'
                />
                <div>
                  <h3 className='text-black text-2xl font-bold mb-1'>
                    {van.name}
                  </h3>
                  <p className='my-4 '>
                    <span className='font-bold text-xl'>${van.price}</span> /day
                  </p>
                  <i className='block bg-[#FF8C38] text-white font-semibold p-3 rounded-xl text-xl text-center'>
                    {van.type}
                  </i>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Vans;
