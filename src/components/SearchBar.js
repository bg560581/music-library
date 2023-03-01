import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext.js'

function SearchBar() {
  const {term, handleSearch} = useContext(SearchContext)

  return (
    <form>
        <input ref={term} type='text' placeholder='Search Here' />
        <button onClick={(e) => handleSearch(e, term.current.Value)}>Submit</button>
    </form>
  )
}

export default SearchBar