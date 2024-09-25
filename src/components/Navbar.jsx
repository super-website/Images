import { NavLink, useLocation } from 'react-router-dom'
import SearchForm from '../pages/SearchForm'

const Navbar = () => {
  const location = useLocation()
  const items = [
    { id: 1, name: 'about', path: 'about' },
    { id: 2, name: 'users', path: 'users' },
    { id: 3, name: 'gallery', path: 'gallery' },
  ]

  return (
    <div className='flex justify-between mb-5 gap-4 items-center'>
      <div>
        <a href='/' className='text-3xl text-white'>
          Picsum
        </a>
      </div>

      {location.pathname === '/' && <SearchForm />}

      <ul className='flex gap-4'>
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
  )
}

export default Navbar
