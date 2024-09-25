import { useQuery } from '@tanstack/react-query'
import { useGlobalContext } from './context'
import axios from 'axios'
import { FaHeart } from 'react-icons/fa'
import { useState } from 'react'
import Skelton from '../components/Skelton'

const url =
  'https://api.unsplash.com/search/photos?client_id=MBSh4UFmTzINMXwTxM_OygCRTnqwVltDfFPdlxwdH4U'

const Result = () => {
  const { searchTerm } = useGlobalContext()
  const [likedPhotos, setLikedPhotos] = useState({})

  const response = useQuery({
    queryKey: ['results', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}&per_page=20`)
      return result.data
    },
  })

  if (response.isLoading) {
    return <Skelton />
  }

  if (response.isError) {
    return (
      <div>
        <h4>There was something wrong.....</h4>
      </div>
    )
  }

  const results = response.data.results

  if (results.length < 1) {
    return (
      <div className='text-center pt-10'>
        <h4 className='text-4xl max-w-xl m-auto'>
          There is nothing to match according to your value!!!
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
      <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 mt-5 max-w-7xl m-auto'>
        {results.map((item) => {
          const { id, urls, tags, likes } = item
          const isLiked = likedPhotos[id] || false
          return (
            <div className='card bg-base-100 w-96 shadow-xl' key={id}>
              <figure>
                <div className='badge bg-secondary text-black absolute right-2 top-2'>
                  New
                </div>
                <img
                  src={urls.regular}
                  alt='Shoes'
                  className='max-w-full max-h-full object-cover'
                  width={400}
                  height={400}
                />
              </figure>
              <div className='card-body'>
                <div className='flex items-center gap-2'>
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
                  <span>{isLiked ? likes + 1 : likes}</span>
                </div>
                <div className='card-actions justify-end'>
                  {tags &&
                    tags.map((tag) => {
                      return (
                        <div className='badge badge-outline' key={tag}>
                          {tag.title}
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Result
