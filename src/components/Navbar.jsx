import { NavLink, useLocation } from 'react-router-dom'
import SearchForm from '../pages/SearchForm'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const location = useLocation()
  const items = [
    { id: 1, name: 'about', path: 'about' },
    { id: 2, name: 'users', path: 'users' },
    { id: 3, name: 'gallery', path: 'gallery' },
  ]

  return (
    <div className='navbar bg-base-100 max-w-7xl m-auto'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl' href='/'>
          Picsum
        </a>
      </div>
      <div className='flex-none gap-2 items-center '>
        {/* Desktop */}
        <ul className='menu menu-horizontal hidden md:flex'>
          {items.map((item) => {
            const { id, name, path } = item
            return (
              <li key={id}>
                <NavLink to={path} className='capitalize text-md'>
                  {name}
                </NavLink>
              </li>
            )
          })}
        </ul>
        {/* Mobile */}
        <div className='dropdown dropdown-end block md:hidden'>
          <div
            tabIndex={0}
            role='button'
            aria-label='bars'
            className='btn btn-ghost btn-circle avatar '
          >
            <div className='w-10  rounded-full'>
              <FaBars className=' h-full text-center  ' />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            {items.map((item) => {
              const { id, name, path } = item
              return (
                <li key={id}>
                  <NavLink to={path} className='capitalize text-md'>
                    {name}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
        {/* Search Form */}

        <div className='form-control'>
          {location.pathname === '/' && <SearchForm />}
        </div>
      </div>
    </div>
  )
}

export default Navbar

//  <div className='flex justify-between mb-5 gap-4 items-center'>
//       <div>
//         <a href='/' className='text-3xl text-white'>
//           Picsum
//         </a>
//       </div>

//

//       <ul className='flex gap-4'>
//
//       </ul>
//     </div>
