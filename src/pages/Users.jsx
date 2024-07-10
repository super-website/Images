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
      <div>
        <h2 className='text-4xl mb-3'>Users</h2>
        {users.map((item) => {
          const { id, user } = item
          return (
            <div key={id} className='flex mb-5'>
              <img
                src={user.profile_image.medium}
                alt={user.name}
                className='rounded-full mr-5'
              />
              <div className='flex flex-col'>
                <span>{user.name}</span>
                <a href={user.social.portfolio_url}>Visit The Profile</a>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Users
