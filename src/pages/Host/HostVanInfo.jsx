import React from 'react'
import { useOutletContext } from 'react-router-dom'
const HostVanInfo = () => {
  const [currentVans] = useOutletContext()
  return (
    <div className='p-3 mb-10 flex flex-col gap-4 text-2xl capitalize'>
      <p>
        <span className='font-bold'>Name: </span>
        {currentVans.name}
      </p>
      <p>
        <span className='font-bold '>Category: </span>
        {currentVans.type}
      </p>
      <p>
        <span className='font-bold'>Description: </span>
        {currentVans.description}
      </p>
      <p>
        <span className='font-bold'>Visibility: </span>Public
      </p>
    </div>
  );
}

export default HostVanInfo