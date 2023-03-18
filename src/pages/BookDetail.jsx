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
            <p>"{book.name} of Biratnagar" is the third book in the Harry Potter series written by J.K. Rowling. The story follows Harry Potter, a young wizard, during his third year at Hogwarts School of Witchcraft and Wizardry. Harry's summer is disrupted when an infamous criminal named Sirius Black escapes from the wizard prison, Azkaban, and is believed to be seeking revenge on Harry. Along with his best friends, Ron and Hermione, Harry sets out to uncover the truth about Sirius Black and his connection to Harry's family. The book is filled with magical creatures, time travel, and important revelations about the past and future of the wizarding world.</p>
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
                        <td>JK Rowling</td>
                    </tr>

                    <tr>
                        <th>Publication:</th>
                        <td>Warner Bros Publications</td>
                    </tr>

                    <tr>
                        <th>Type:</th>
                        <td>Science Fiction</td>
                    </tr>
                    
                    <tr>
                        <th>Published Year:</th>
                        <td>2007</td>
                    </tr>
                    
                    <tr>
                        <th>Edition:</th>
                        <td>First</td>
                    </tr>

                    <tr>
                        <th>Location:</th>
                        <td>Biratnagar, Morang</td>
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
