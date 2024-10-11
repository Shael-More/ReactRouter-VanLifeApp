import React from 'react';
import { useOutletContext } from 'react-router-dom';
const HostVanPhotos = () => {
  const [currentVans] = useOutletContext();
  return (
    <div className='my-7 p-3'>
      <img width={300} src={currentVans.imageUrl} alt={currentVans.name} />
    </div>
  );
};

export default HostVanPhotos;
