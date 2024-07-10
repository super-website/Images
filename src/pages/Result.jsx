import { useQuery } from '@tanstack/react-query'
import { useGlobalContext } from './context'
import axios from 'axios'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const url =
  'https://api.unsplash.com/search/photos?client_id=MBSh4UFmTzINMXwTxM_OygCRTnqwVltDfFPdlxwdH4U'

const Result = () => {
  const { searchTerm } = useGlobalContext()
  const response = useQuery({
    queryKey: ['results', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}&per_page=15`)
      return result.data
    },
  })

  if (response.isLoading) {
    return (
      <div className='flex items-center justify-center'>
        <img
          src='https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif'
          alt='loading'
        />
      </div>
    )
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

  return (
    <>
      <div className=' border-red-700 border-b py-3'>
        <span className='text-base  '>
          Total Products: <span className='text-red-700'>{results.length}</span>
        </span>
      </div>
      <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 mt-5 '>
        {results.map((item) => {
          const { id, urls } = item
          return (
            <div key={id}>
              <img src={urls.regular} className='h-full  w-full ' />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Result
