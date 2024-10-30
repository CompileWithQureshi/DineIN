import React from 'react'

function NavBar() {
    const userName=localStorage.getItem('UserData')
    const data=JSON.parse(userName)
    // console.log(data.PhoneNumber);
  return (
    <div className='w-96  '> 
    <nav className='flex justify-between items-center  max-w-screen-sm border-2 rounded-lg bg-slate-50 h-16 m-2 w-full p-4 '>
      {/* Padding for User Name */}
      <p className='p-2'>
        {data.PhoneNumber}
      </p>

      {/* Adjust padding or use box-border to include padding inside the dimensions */}
      <div className='w-12 h-12 rounded-full bg-slate-700 box-border'>
        {/* The img can go here or any other content */}
        {/* <img src="" alt="" /> */}
      </div>
    </nav>
  </div>
  )
}

export default NavBar