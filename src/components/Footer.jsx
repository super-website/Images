import { FaHeart, FaUnsplash } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer footer-center bg-gray-100 text-gray-700 py-8 border-t border-gray-200'>
      <aside className='text-center space-y-4'>
        <div>
          <p className='text-lg text-gray-600'>
            Proudly Powered By{' '}
            <span className='font-bold text-3xl text-blue-600'>KAM</span>
          </p>
          <p className='text-sm text-gray-500'>
            Created by Khawaja Ameer Muhavia
          </p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <p className='text-sm text-gray-500'>Images provided by</p>
          <a
            href='https://unsplash.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1 text-blue-500 hover:text-blue-700 transition'
          >
            <FaUnsplash className='inline-block' />
            Unsplash
          </a>
        </div>
        <p className='text-sm text-gray-400 mt-3'>
          © {new Date().getFullYear()} - All rights reserved
        </p>
        <div className='flex justify-center items-center gap-2 text-sm text-gray-500'>
          <span>Made with</span>
          <FaHeart className='text-red-500' />
          <span>by Khawaja Ameer Muhavia</span>
        </div>
      </aside>
    </footer>
  )
}

export default Footer
