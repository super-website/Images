import axios from 'axios'
import { useEffect, useState } from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'

const url =
  'https://api.unsplash.com/search/photos?client_id=MBSh4UFmTzINMXwTxM_OygCRTnqwVltDfFPdlxwdH4U'

const Users = () => {
  const { searchTerm } = useGlobalContext()
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await axios(`${url}&query=${searchTerm}&per_page=20`)
    console.log(response.data)

    setUsers(response.data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='text-md  text-gray-500 '>
        <ul className='flex gap-2'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>{'>'}</li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </div>
      <h2 className='text-4xl mb-3'>Users</h2>
      <div className='grid grid-cols-3 gap-10 max-w-6xl m-auto'>
        {users.map((item) => {
          const { id, user } = item
          return (
            <div className='card bg-base-100 shadow-xl' key={id}>
              <figure>
                <div className='avatar'>
                  <div className='w-24 rounded-full'>
                    <img src={user.profile_image.medium} alt='Movie' />
                  </div>
                </div>
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>{user.name}</h2>
                <p>{user.bio ? user.bio : 'N/A'}</p>
                <div className='card-actions justify-end'>
                  <a className='btn btn-primary' href={user.links.portfolio}>
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Users
