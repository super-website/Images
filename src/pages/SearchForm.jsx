import { useGlobalContext } from './context'
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    setSearchTerm(searchValue)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='search'
        placeholder='Pakistan'
        autoFocus
        autoComplete='off'
        className=' input-sm input input-bordered'
      />
    </form>
  )
}

export default SearchForm
