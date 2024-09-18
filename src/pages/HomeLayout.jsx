import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  return (
    <div className='p-10  '>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default HomeLayout
