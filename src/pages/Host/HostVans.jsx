import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HostVans = () => {
  const [vans, setVans] = useState([]);

  const fetchVans = async () => {
    try {
      const response = await fetch(`/api/host/vans`);
      const data = await response.json();
      setVans(data.vans);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVans();
  }, []);

  return (
    <section>
      <h1 className='text-3xl font-bold p-3'>Your listed vans</h1>

      <div>
        {vans && vans.length > 0
          ? vans.map((van) => (
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
            ))
          : <h2 className='text-3xl font-bold text-center my-10'>Loading...</h2>}
      </div>
    </section>
  );
};

export default HostVans;
