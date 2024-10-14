import React from 'react';
import {  Link, useLocation, useLoaderData } from 'react-router-dom';
import { getVans } from '../../api';
export const loader = async ({ params }) => {
  return getVans(params.id);
};
const VanDetail = () => {
  // gives dynamic segment from url of current tab
  // const params = useParams();
  const location = useLocation();
  const van = useLoaderData();

  // const fetchVanDetails = async () => {
  //   try {
  //     const response = await fetch(`/api/vans/${params.id}`);
  //     const data = await response.json();
  //     setVan(data.vans);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchVanDetails();
  // }, [params.id]);

  const search = location.state?.search || '';
  const type = location.state?.type || 'all';
  return (
    <div>
      <Link
        to={`..${search}`}
        relative='path'
        className='text-2xl pl-5 underline hover:scale-105 '
      >
        &larr; <span>Back to {type} vans</span>
      </Link>

      <div className='p-6 mt-8'>
        <img src={van.imageUrl} alt={van.name} className='rounded-xl mb-12' />
        <i className='bg-[#FF8C38] text-white font-semibold px-6 p-2 rounded-xl text-xl text-center'>
          {van.type}
        </i>
        <h2 className='text-3xl font-bold text-[#161616] my-4'>{van.name}</h2>
        <p className='font-bold text-xl  mb-2'>
          ${van.price} <span>/day</span>
        </p>
        <p className='text-xl'>{van.description}</p>
        <button className='bg-[#FF8C38] text-white font-bold p-4 mt-4 text-xl rounded-xl w-full'>
          Rent this van
        </button>
      </div>
    </div>
  );
};

export default VanDetail;
