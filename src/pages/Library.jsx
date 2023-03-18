import React from 'react'
import Book from '../components/Book'
import '../styles/library.scss'

const Library = () => {
  return (
    <div className='container'>
        <h2>Library</h2>

        <form action="" className="book-search-bar" style={{marginBottom:'4rem'}}>
          <label htmlFor="book-name">Book:</label>
          <input type="text" id='book-name' name="book-name" />
          <label htmlFor="book-genres">Genre:</label>
          <select id="book-genres">
              <option value="">Select a genre</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-fiction</option>
              <option value="mystery">Mystery</option>
              <option value="romance">Romance</option>
              <option value="science-fiction">Science Fiction</option>
              <option value="horror">Horror</option>
              <option value="biography">Biography</option>
          </select>

          <label htmlFor="location">Location:</label>
          <input type="text" id='location' name='location' />

          <label htmlFor="author">Author:</label>
          <input type="text" id='author' name='author' />

          <button type='submit'>Search</button>
        </form>

        <div className="books">
            <Book/>
           
        </div>
    </div>
  )
}

export default Library
