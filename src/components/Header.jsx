import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  const fakeLogOut = () => {
    localStorage.removeItem('loggedin');
    console.log('localStorage cleared')
  }
 
  return (
    <header className='flex justify-between items-center py-8 px-6 bg-[#FFF7ED]'>
      <NavLink to='/' className='text-black font-bold text-2xl'>
        #VANLIFE
      </NavLink>
      <nav className='flex justify-between gap-5 font-bold text-gray-700 text-xl'>
        <NavLink
          style={({isActive}) => isActive ? activeStyles : null}
          to={'/host'}
        >
          Host
        </NavLink>
        <NavLink
          style={({isActive}) => isActive ? activeStyles : null}
          to={'/about'}
        >
          About
        </NavLink>
        <NavLink
          style={({isActive}) => isActive ? activeStyles : null}
          to={'/vans'}
        >
          Vans
        </NavLink>
        <NavLink
          style={({isActive}) => isActive ? activeStyles : null}
          to={'login'}
        >
          Login
        </NavLink>
        <button onClick={fakeLogOut} className='bg-gray-300 px-1'>X</button>
      </nav>
    </header>
  );
};

export default Header;
