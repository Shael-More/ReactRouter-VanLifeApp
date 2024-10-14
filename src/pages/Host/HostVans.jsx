import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';
import { requireAuth } from '../../utils';
export const loader = async () => {
  await requireAuth()
  return getHostVans();
};

const HostVans = () => {
  const vans = useLoaderData();

  return (
    <section>
      <h1 className='text-3xl font-bold p-3'>Your listed vans</h1>

      <div>
        {vans.map((van) => (
          <Link to={van.id} key={van.id}>
            <div key={van.id} className='flex m-5 bg-[#FFF7ED] p-5'>
              <img
                src={van.imageUrl}
                alt={van.name}
                className='w-[150px] mr-8 rounded-xl'
              />
              <div>
                <h3 className='text-3xl font-bold mb-3'>{van.name}</h3>
                <p className='text-2xl font-semibold'>
                  <span>${van.price}</span>/day
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HostVans;
