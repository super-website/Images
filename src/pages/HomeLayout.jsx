import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className='p-10 sm:p-2 max-w-7xl m-auto'>
        <Outlet />
      </div>
    </>
  )
}

export default HomeLayout
