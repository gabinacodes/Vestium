import React from 'react'
import Image  from '../images/imaage'
function Home() {

  return (
    <div>
      <div className='border-solid border-2 border-slate-500 box-content w-4/5 px-6 py-3 rounded-md cursor-text mobile:w-96' id='mail'>
        <input className='focus:outline-none w-100%' type='text' placeholder='E-mail address'/>
        <span className='hidden' id='mail_label'>E-mail address</span>
    </div>
    </div>
  )
}

export default Home 