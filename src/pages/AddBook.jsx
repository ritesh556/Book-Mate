import React ,{ useState }  from 'react'

import '../styles/addbook.scss'
import Book from '../assets/book.jpg'

const AddBook = () => {
  const [image, setImage] = useState(Book);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='add-book container'>
      <h2>Please Enter Book Details</h2>

        <div className="grid">

            <form action="" className='book-details-form' >
            <label htmlFor="book-title">Title</label>
            <input type="text" id='book-title' name='book-title' required  />

            <label htmlFor="author">Author</label>
            <input type="text" id='author' name='author' required  />

            <label for="publication">Publication</label>
            <input type="text" id='publication' name='publication' required  />

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
            <input type="text" id='published-year' name='published-year' required  />

            <label htmlFor="edition">Edition</label>
            <input type="text" id='edition' name='edition' required  />

            <label htmlFor="address">Address</label>
            <input type="text" id='address' name='address ' required  />
            <label htmlFor="price">Price</label>
            <input type="number" id='price' name='price' required  />

            <label htmlFor="about-book">About This Book</label>
            <textarea name="about-book" id="about-book" cols="30" rows="10" required ></textarea>

            <div className="btns">
              <button type='submit'>Add Book</button>
              <button >Cancel</button>
            </div>
            

            </form>

            <div className="book-img-upload">
                <img src={image} alt="" />
                <input type="file" onChange={handleImageChange} required />
            </div>
        </div>      
    </div>
  )
}

export default AddBook
