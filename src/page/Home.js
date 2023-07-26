import React from 'react'
import Image  from '../images/imaage'
function Home() {
  return (
    <div>
      <div className='flex   flex-wrap m-3 p-3'>
        <div className=' mx-2 p-3 bg-babyBlue rounded-lg' >
          <img alt='img' src={Image.ali} />
          <p>0</p>
          <p className='text-base'>Accepted bookings card</p>

        </div>
        <div className='w-12 h-20 mx-2 bg-sand rounded-lg' ></div>
        <div className='w-12 h-20 mx-2 rounded-lg bg-appleRed'></div>
      </div>
    </div>
  )
}

export default Home 