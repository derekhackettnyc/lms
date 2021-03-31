import React from 'react'
import { withRouter } from 'react-router-dom';


const SearchBar = ({history}) => {

  const [query, setQuery] = React.useState('')

  const handleSubmit = event => {

    event.preventDefault();

    if (!query) // Return if no query submiited
      return

      const term = query // save query
      setQuery('')   // reset the search bar
      
    history.push(`/search/${term}`) // route GetCourses

  }


  return (
    <form className="queryform" onSubmit={handleSubmit}>
      <input type="text" className="queryform__query" placeholder="What are you looking for?" name='query' value={query} onChange={event => setQuery(event.target.value)} />
      <button type='submit' className="queryform__btn puluse-single"><i className="fas fa-search"></i></button>
    </form>
  )
}

export default withRouter(SearchBar)