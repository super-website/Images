import { useState, useEffect } from 'react'
import axios from 'axios'
import Skelton from '../components/Skelton'
import { Helmet } from 'react-helmet'
import { FaDownload } from 'react-icons/fa'

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
  }, [currentPage])

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <>
      <Helmet>
        <title>
          Explore 100+ Free HD Images | Stunning Gallery from Picsum
        </title>
        <meta
          name='description'
          content='Welcome to our stunning gallery featuring over 100 free HD images from Picsum! Discover a diverse collection of high-quality visuals, perfect for websites, blogs, and creative projects. From breathtaking nature scenes to dynamic urban shots, find the perfect image to bring your ideas to life. Download your favorites today and elevate your content effortlessly!'
        />
      </Helmet>
      <div className='max-w-7xl m-auto'>
        <h2 className='text-xl md:text-3xl ml-5 md:ml-0 mb-5'>Gallery</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
          {isLoading ? (
            <Skelton />
          ) : (
            gallery.map((item) => (
              <div
                className='card bg-base-100 shadow-xl mx-auto md:mx-0'
                style={{ width: '320px' }}
                key={item.id}
              >
                <figure>
                  <img
                    src={item.download_url}
                    alt={item.author}
                    className='w-80 h-80'
                    rel='preload'
                  />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'> {item.author}</h2>
                  <div className='card-actions justify-end'>
                    <button
                      href={item.download_url}
                      onClick={fetch(item.download_url)
                        .then((response) => {
                          response.blob()
                        })
                        .then((blob) => {
                          const link = document.createElement('a')
                          link.href = URL.createObjectURL(blob)
                          link.setAttribute('download', `${item.author}.jpg`)
                          document.body.appendChild(link)
                          link.click()
                          document.body.removeChild(link)
                        })
                        .catch((error) => {
                          console.error('Error fetching data:', error)
                        })}
                      className='badge badge-outline'
                    >
                      <FaDownload className='mr-2' />
                    </button>
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
    </>
  )
}

export default Gallery
