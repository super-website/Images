import { useState, useEffect } from 'react'
import axios from 'axios'
import Skelton from '../components/Skelton'

const Gallery = () => {
  const [gallery, setGallery] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(2)
  const itemsPerPage = 12 // Number of images per page
  const baseUrl = 'https://picsum.photos/v2/list'

  const fetchData = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          page: currentPage,
          limit: itemsPerPage,
        },
      })
      setIsLoading(true)
      console.log(response.data)

      setGallery(response.data)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [currentPage]) // Fetch data when currentPage changes

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <div className='max-w-7xl m-auto'>
      <h2 className='text-3xl mb-5'>Gallery</h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
        {isLoading ? (
          <Skelton />
        ) : (
          gallery.map((item) => (
            <div className='card bg-base-100 w-96 shadow-xl' key={item.id}>
              <figure>
                <img
                  src={item.download_url}
                  alt={item.author}
                  className='w-96 max-h-96'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'> {item.author}</h2>
                <div className='card-actions justify-end'>
                  <a
                    href={item.download_url}
                    className='badge badge-outline'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className='flex justify-end mt-5 mr-7 '>
        <div className='join'>
          <button
            className='join-item btn'
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            «
          </button>
          <button className='join-item btn'>{currentPage}</button>
          <button className='join-item btn' onClick={nextPage}>
            »
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gallery
