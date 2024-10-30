import React from 'react'
import NavBar from '../COMPONENTS/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../COMPONENTS/footer'
function Layout() {
  return (
    <div className='flex   gap-y-20 flex-col items-center justify-between '>
        <NavBar/>
        <main className=''>

        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout