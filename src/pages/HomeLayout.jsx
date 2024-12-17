import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className='lg:p-10 sm:p-2 max-w-7xl m-auto'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default HomeLayout
