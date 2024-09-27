import React from 'react'

const ErrorPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-center'>
        <div className='mb-4'>
          <svg
            className='w-24 h-24 mx-auto text-red-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 16h-1v-4h1m0-2h-1m2 6h1m-1-2h-1m6 6H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2z'
            />
          </svg>
        </div>
        <h1 className='text-4xl font-bold text-gray-800'>
          404 - Page Not Found
        </h1>
        <p className='mt-2 text-lg text-gray-600'>
          Oops! The page you're looking for doesn't exist.
        </p>
        <a href='/' className='mt-4 btn btn-primary'>
          Go Back Home
        </a>
      </div>
    </div>
  )
}

export default ErrorPage
