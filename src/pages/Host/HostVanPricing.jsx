import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
  const [currentVans] = useOutletContext()
  return (
    <h1 className='text-3xl font-bold p-3 my-7'>${currentVans.price}.00 /day</h1>
  )
}

export default HostVanPricing