import React from 'react'
import image  from '../images/imaage'
function Home() {
  return (
    <div>
      <div className='flex   flex-wrap m-3 p-3'>
        <div className='w-12 h-20 mx-2 bg-babyBlue rounded-lg' >
          <img alt='img' src={image.ali}/>
        </div>
        <div className='w-12 h-20 mx-2 bg-sand rounded-lg' ></div>
        <div className='w-12 h-20 mx-2 rounded-lg bg-appleRed'></div>
      </div>
    </div>
  )
}

export default Home 