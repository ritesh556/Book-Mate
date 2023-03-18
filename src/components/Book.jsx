import React  from 'react'
import { useNavigate } from 'react-router-dom'
import Kitab from '../assets/book.jpg'
import art from '../assets/the art of not giving f.jpg'

export  const books = [

    {id:1,name: "Harry Potter and The Prisoner", imgurl: Kitab},
    {id:2, name: "Game of throngs", imgurl: "https://images.squarespace-cdn.com/content/v1/58cedcd720099e8bad7936c7/1542918103708-9PO5CYPKTDEL1X07LQB4/Book+on+Table+2+%28vivid%29.jpeg?format=1000w"},
    {id:3, name: "One piece", imgurl: "https://i.etsystatic.com/36436716/r/il/ff2d5d/4092933328/il_fullxfull.4092933328_9w2j.jpg"},
    {id:4,name:"The  art of not giving a fuck",imgurl:art},
    {id:5,name:"Meditations ",imgurl:"https://i.etsystatic.com/23909364/r/il/04f042/4776066355/il_794xN.4776066355_m7z9.jpg"}
  ];

 const Book = () => {
    const navigate = useNavigate()
     
    const bookCard = {
        display: 'flex',
        flexDirection:'column',
        gap:'1.5rem',
        alignItems: 'center',
    }

    const imgStyle = {
        width: '200px',
        height:'200px',
        objectFit: 'cover',
    }

    const bookTitle = {
        fontSize: '1.7rem',
    }

  
    const bookCards = books.map((book) => (
            
        <div className="books-card" style={bookCard} >
           
            
          <img src={book.imgurl}  alt="book" style={imgStyle} />
          <h4 className="book-title" style={bookTitle}>{book.name}</h4>
          <button onClick={() => navigate(`/library/detail/${book.id}`,{ state: { book } })}>View Details</button>
        </div>
      ));
    

      


  return ( <>
      {bookCards} </>
   
  )
}

export default Book
