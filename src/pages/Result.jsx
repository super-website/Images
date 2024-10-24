import { useQuery } from '@tanstack/react-query'
import { useGlobalContext } from './context'
import axios from 'axios'
import { FaHeart, FaUsers } from 'react-icons/fa'
import { useState } from 'react'
import Skelton from '../components/Skelton'
import { Helmet } from 'react-helmet'

const url =
  'https://api.unsplash.com/search/photos?client_id=MBSh4UFmTzINMXwTxM_OygCRTnqwVltDfFPdlxwdH4U'

const Result = () => {
  const { searchTerm } = useGlobalContext()
  const [likedPhotos, setLikedPhotos] = useState({})
  const [limit, setLimit] = useState(10)

  const response = useQuery({
    queryKey: ['results', searchTerm, limit],
    queryFn: async () => {
      const result = await axios.get(
        `${url}&query=${searchTerm}&per_page=${limit}`
      )
      return result.data
    },
  })

  const handleClick = () => setLimit((prevLimit) => prevLimit + 5)

  if (response.isLoading) return <Skelton />

  if (response.isError) {
    return (
      <div>
        <h4>There was something wrong: {response.error.message}</h4>
      </div>
    )
  }

  const results = response.data.results

  if (results.length < 1) {
    return (
      <div className='text-center pt-10'>
        <h4 className='text-4xl max-w-xl m-auto'>
          No results found for `${searchTerm}`!
        </h4>
      </div>
    )
  }

  const handleLike = (id) => {
    setLikedPhotos((prevLikedPhotos) => ({
      ...prevLikedPhotos,
      [id]: !prevLikedPhotos[id],
    }))
  }

  return (
    <>
      <Helmet>
        <title>
          100+ Free HD Images | Download Stunning Pictures from Picsum
        </title>
        <meta
          name='description'
          content='Discover over 100 high-definition images available for free download on Picsum.'
        />
      </Helmet>
      <div className='grid gap-4 mt-5 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3'>
        {results.map((item) => {
          const { id, urls, likes, description, alt_description, user } = item
          const isLiked = likedPhotos[id] || false

          return (
            <div
              className='card bg-base-100 shadow-xl transition-transform duration-300 hover:scale-105 mx-auto md:mx-0'
              key={id}
              style={{ width: '320px' }}
            >
              <figure>
                <span className='badge badge-success text-black absolute left-2 top-2'>
                  {user.first_name}
                </span>
                <img
                  src={urls.regular}
                  loading='lazy'
                  alt={alt_description || `Photo by ${user.first_name}`}
                  className='max-w-full object-cover'
                />
              </figure>
              <div className='card-body'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-1 text-sm'>
                    <FaUsers />
                    <span>{isLiked ? likes + 1 : likes}</span>
                  </div>
                  <button
                    onClick={() => handleLike(id)}
                    aria-label='like-button'
                  >
                    {isLiked ? (
                      <FaHeart className='text-red-500' />
                    ) : (
                      <FaHeart />
                    )}
                  </button>
                </div>
                <h1 className='text-sm mt-2'>
                  {description ||
                    alt_description ||
                    'No description available.'}
                </h1>
              </div>
            </div>
          )
        })}
      </div>
      {results.length >= limit && (
        <div className='flex justify-center'>
          <button
            onClick={handleClick}
            aria-label='Show more photos'
            className='bg-blue-500 text-white m-4 p-2 border border-blue-500 rounded hover:bg-blue-700 transition-all'
          >
            Show More
          </button>
        </div>
      )}
    </>
  )
}

export default Result
