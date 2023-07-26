import React from 'react'
import Image  from '../images/imaage'
function Home() {
  return (
    <div>
      <div className='flex   flex-wrap m-3 p-3'>
        <div className=' m-2 p-3 bg-babyBlue rounded-lg text-white' >
          <img alt='img' src={Image.ali} />
          <p className='text-lg font-medium'>0</p>
          <p className='text-lg w-9 font-medium pt-2'>Accepted Bookings </p>

        </div>
        <div className='m-2 p-3 bg-sand rounded-lg text-white' >
          <img alt='img' src={Image.ali} />
          <p className='text-lg font-medium'>0</p>
          <p className='text-lg w-9 font-medium pt-2'>Pending Bookings</p>
        </div>
        <div className='m-2 p-3 bg-teal rounded-lg text-white' >
          <img alt='img' src={Image.ali} />
          <p className='text-lg font-medium'>0</p>
          <p className='text-lg w-9 font-medium pt-2'>Rejected Bookings</p>
        </div>
        <div className=' p-3 m-2 rounded-lg bg-fire text-white'>   
          <img alt='img' src={Image.ali} />
          <p className='text-lg font-medium'>0</p>
          <p className='text-lg w-9 font-medium pt-2'>Completed Bookings </p>
       </div>
      </div>
    </div>
  )
}

export default Home 