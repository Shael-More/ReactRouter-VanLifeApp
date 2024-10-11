import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const HostLayout = () => {
  return (
    <>
      <nav className='flex gap-5 text-2xl my-5 mx-2'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'font-bold text-[#161616] underline' : null
          }
          to={'.'} // relative paths for current  
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'font-bold text-[#161616] underline' : null
          }
          to={'income'} // relative path with respect to parents
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'font-bold text-[#161616] underline' : null
          }
          to={'vans'}
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'font-bold text-[#161616] underline' : null
          }
          to={'reviews'} 
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
