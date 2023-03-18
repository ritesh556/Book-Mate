import React from 'react'
import '../styles/addbook.scss'
import Book from '../assets/book.jpg'

const AddBook = () => {
  return (
    <div className='add-book container'>
      <h2>Please Enter Book Details</h2>

        <div className="grid">

            <form action="" className='book-details-form'>
            <label htmlFor="book-title">Title</label>
            <input type="text" id='book-title' name='book-title' />

            <label htmlFor="author">Author</label>
            <input type="text" id='author' name='author' />

            <label for="publication">Publication</label>
            <input type="text" id='publication' name='publication' />

            <label htmlFor="genre">Genre</label>
            <div className="genre">
                <input type="checkbox" id='fiction' name='genre' />
                <label htmlFor="fiction">Fiction</label>
                <input type="checkbox" id='non-fiction' name='genre' />
                <label htmlFor="non-fiction">Non Fiction</label>
                <input type="checkbox" id='education' name='genre' />
                <label htmlFor="education">Education</label>
                <input type="checkbox" id='horror' name='genre' />
                <label htmlFor="Horror">Horror</label>
                <input type="checkbox" id='biography' name='genre' />
                <label htmlFor="biography">Biography</label>
            </div>

            <label htmlFor="published-year">Published Year</label>
            <input type="text" id='published-year' name='published-year' />

            <label htmlFor="edition">Edition</label>
            <input type="text" id='edition' name='edition' />

            <label htmlFor="address">Address</label>
            <input type="text" id='address' name='address' />

            <label htmlFor="about-book">About This Book</label>
            <textarea name="about-book" id="about-book" cols="30" rows="10"></textarea>

            <div className="btns">
              <button type='submit'>Add Book</button>
              <button >Cancel</button>
            </div>
            

            </form>

            <div className="book-img-upload">
                <img src={Book} alt="" />
                <input type="file" />
            </div>
        </div>      
    </div>
  )
}

export default AddBook
