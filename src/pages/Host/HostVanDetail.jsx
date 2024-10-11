import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams, Outlet } from 'react-router-dom';

const HostVanDetail = () => {
  const params = useParams();
  const [currentVans, setCurrentVans] = useState([]);

  const fetchHostVanDetails = async () => {
    try {
      const response = await fetch(`/api/host/vans/${params.id}`);
      const data = await response.json();
      setCurrentVans(data.vans);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchHostVanDetails();
  }, [params.id]);

  return (
    <section>
      <Link
        to={'..'}
        relative='path'
        className='text-2xl pl-5 underline hover:scale-105'
      >
        &larr; <span>Back to all vans</span>
      </Link>
      <div className='flex p-5 mt-5'>
        <img src={currentVans.imageUrl} alt={currentVans.name} width={150} />
        <div className='text-3xl ml-4 flex flex-col gap-4'>
          <i className=' bg-[#FF8C38] text-white px-5 '>{currentVans.type}</i>
          <p>{currentVans.name}</p>
          <p>${currentVans.price}/day</p>
        </div>
      </div>

      {/* LINKS */}
      <nav className='flex gap-5 text-2xl my-5 mx-2'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'font-bold text-[#161616] underline' : null
          }
          to={`.`}
          end
        >
          Details
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'font-bold text-[#161616] underline' : null
          }
          to={`pricing`}
        >
          Prices
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'font-bold text-[#161616] underline' : null
          }
          to={`photos`}
        >
          Photos
        </NavLink>
      </nav>
      <Outlet context={[currentVans]}/>
    </section>
  );
};

export default HostVanDetail;
