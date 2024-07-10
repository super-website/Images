import { useGlobalContext } from './context'
import { FaSearch } from 'react-icons/fa'
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    setSearchTerm(searchValue)
  }
  return (
    <div>
      <div className='flex justify-center '>
        <form
          onSubmit={handleSubmit}
          className='  shadow-xl p-3  border rounded-full '
        >
          <input
            type='text'
            name='search'
            className='px-4 outline-none sm:w-64 lg:w-96 bg-transparent '
            placeholder='Pakistan'
            autoFocus
            autoComplete='off'
          />
          <button
            type='submit'
            className='px-3 text-gray-500 border-l-2 hover:text-white transition'
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchForm
