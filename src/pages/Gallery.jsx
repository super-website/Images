import { useState, useEffect } from 'react'
import axios from 'axios'

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
    <>
      <h2 className='text-3xl mb-5'>Gallery</h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
        {isLoading ? (
            <div className='flex items-center justify-center w-full'>
            <img
              src='https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif'
              alt='loading'
            />
          </div>
        ) : (
          gallery.map((item) => (
            <div key={item.id}>
              <img src={item.download_url} alt={item.author} />
            </div>
          ))
        )}
      </div>
      <div className='flex justify-end gap-3 mt-5'>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className='bg-gray-300 shadow-md p-3 py-2'
        >
          Prev
        </button>
        <button onClick={nextPage} className='bg-gray-300 shadow-md p-3 py-2'>
          Next
        </button>
      </div>
    </>
  )
}

export default Gallery
