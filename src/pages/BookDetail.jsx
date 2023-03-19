import React from 'react'
import { useLocation } from 'react-router-dom'
// import {books} from '../components/Book'
// import Books from '../assets/book.jpg'
import User from '../assets/user.jpg'
import '../styles/bookdetail.scss'

const BookDetail = () => {
   const Location = useLocation()
   const book = Location.state.book
   


  
  return (
    <div className='bookdetails'>
       
        <h1>{book.name}</h1>
      <div className="grid">
        <div className="detail">
            <img src={book.imgurl} alt="bookimg" />
            <h2 className='book-title'>{book.name}</h2>
            <h4>About This Book:</h4>
            <p>{book.About_Book}</p>
        </div>

        <div className="book-details">

            {/* Book Details Table */}

            <table className='book-details-table'>
                <tbody>
                    <tr>
                        <th>Book Name:</th>
                        <td>{book.name} of Biratnagar</td>
                    </tr>
                    
                    <tr>
                        <th>Author:</th>
                        <td>{book.Author}</td>
                    </tr>

                    <tr>
                        <th>Publication:</th>
                        <td>{book.publication}</td>
                    </tr>

                    <tr>
                        <th>Type:</th>
                        <td>{book.Type}</td>
                    </tr>
                    
                    <tr>
                        <th>Published Year:</th>
                        <td>{ book.Published_Year}</td>
                    </tr>
                    
                    <tr>
                        <th>Edition:</th>
                        <td>{book.Edition}</td>
                    </tr>

                    <tr>
                        <th>Price</th>
                        <td>{book.Price}</td>
                    </tr>

                    <tr>
                        <th>Location:</th>
                        <td>{book.Location}</td>
                    </tr>
                </tbody>
            </table>

            {/* Author Details Table */}

            <table className='usertable'>
                <tbody>
                    <tr>
                        <td>
                            <img src={User} alt="User"/>
                        </td>

                        <td>
                            <h3>Uploaded By:</h3>
                            <p><strong>Name:</strong> John Doe</p>
                            <p><strong>Email:</strong> john.doe@example.com</p>
                            <p><strong>Address:</strong> Biratnagar, Morang</p>
                            <button>Send Message</button>
                            <button className='req-btn'>Request Book</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
      </div>
      <hr />
    </div>
  )
}

export default BookDetail
