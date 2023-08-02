import React from 'react' 
function Home() {

  return (
    <div className='flex justify-center mt-4'  >
      <div className='border-solid border-2 border-slate-500 box-content w-4/5 px-6 py-3 rounded-md cursor-text mobile:w-96' id='mail'>
        <input className='focus:outline-none w-100%' type='text' placeholder='E-mail address'/>
        <span className='relative text-sm bg-white -top-6 p-3 text-royalBlue right-40 pb-0 animate-bounce' id='mail'>E-mail address</span>
    </div>
    </div>
  )
}

export default Home 