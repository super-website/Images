import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className='p-10 '>
        <Outlet />
      </div>
    </>
  )
}

export default HomeLayout
