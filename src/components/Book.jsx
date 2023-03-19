import React  from 'react'
import { useNavigate } from 'react-router-dom'
import Kitab from '../assets/book.jpg'
import art from '../assets/the art of not giving f.jpg'

export  const books = [

    
        {
          id: 1,
          name: "Harry Potter and The Prisoner",
          imgurl: Kitab,
          Author: "J.K. Rowling",
          publication: "Warner Bros Publication",
          Type: "Science Fiction",
          Published_Year: 2007,
          Edition: "First",
          Price: 500,
          Location: "Biratnagar Morang",
          About_Book:`"Harry Potter and The Prisoner of Biratnagar" is the third book in the Harry Potter series written by J.K. Rowling. The story follows Harry Potter, a young wizard, during his third year at Hogwarts School of Witchcraft and Wizardry. Harry's summer is disrupted when an infamous criminal named Sirius Black escapes from the wizard prison, Azkaban, and is believed to be seeking revenge on Harry. Along with his best friends, Ron and Hermione, Harry sets out to uncover the truth about Sirius Black and his connection to Harry's family. The book is filled with magical creatures, time travel, and important revelations about the past and future of the wizarding world.`
        },
        {
          id: 2,
          name: "Game of Thrones",
          imgurl: "https://images.squarespace-cdn.com/content/v1/58cedcd720099e8bad7936c7/1542918103708-9PO5CYPKTDEL1X07LQB4/Book+on+Table+2+%28vivid%29.jpeg?format=1000w",
          Author: "George R.R. Martin",
          publication: "Bantam Books",
          Type: "Fantasy",
          Published_Year: 1996,
          Edition: "First",
          Price: 750,
          Location: "Biratnagar Morang",
          About_Book:`Game of Thrones: Game of Thrones is the first book in the A Song of Ice and Fire series by George R.R. Martin. The book is set in the medieval fantasy world of Westeros, where seven noble families fight for control of the Iron Throne. The book follows several main characters, including Eddard Stark, Jon Snow, and Daenerys Targaryen, as they navigate the complex political landscape of Westeros and face threats from both within and outside their own families.`
        },
        {
          id: 3,
          name: "One Piece",
          imgurl: "https://i.etsystatic.com/36436716/r/il/ff2d5d/4092933328/il_fullxfull.4092933328_9w2j.jpg",
          Author: "Eiichiro Oda",
          publication: "Shueisha",
          Type: "Fantashy",
          Published_Year: 1997,
          Edition: "First",
          Price: 550,
          Location: "Biratnagar Morang",
          About_Book:`One Piece: One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. The series follows the adventures of Monkey D. Luffy, a young pirate with rubber powers who sets out on a journey to find the legendary One Piece treasure and become the Pirate King. Along the way, Luffy and his crew encounter a wide variety of friends and enemies, and face numerous challenges and battles.`
        },
        {
          id: 4,
          name: "The Subtle Art of Not Giving a F*ck",
          imgurl: art,
          Author: "Mark Manson",
          publication: "HarperOne",
          Type: "Self-help",
          Published_Year: 2016,
          Edition: "First",
          Price: 600,
          Location: "Biratnagar Morang",
          About_Book:`The Art of Not Giving a Fck: The Art of Not Giving a Fck is a self-help book by blogger and author Mark Manson. The book presents a counterintuitive approach to happiness and personal growth, encouraging readers to focus on what really matters to them and let go of things that don't. The book is filled with humorous and relatable anecdotes, as well as practical advice on how to live a more fulfilling life.`
        },
        {
          id: 5,
          name: "Meditations",
          imgurl: "https://i.etsystatic.com/23909364/r/il/04f042/4776066355/il_794xN.4776066355_m7z9.jpg",
          Author: "Marcus Aurelius",
          publication: "Penguin Classics",
          Type: "Philosophy",
          Published_Year: "180 AD",
          Edition: "Revised",
          Price: 400,
          Location: "Biratnagar Morang",
          About_Book: `Meditations is a series of personal writings by Roman Emperor Marcus Aurelius. The book, written in Greek, is a collection of the emperor's private notes and reflections on philosophy, Stoicism, and the nature of the universe. Meditations has been praised for its timeless wisdom and practical advice on living a good life.`
        },
        {
            id: 6,
            name: "The Time Machine",
            imgurl: "https://static.wixstatic.com/media/78b7db_0f23525201f148559289354f2fbc8121~mv2.jpg/v1/fill/w_280,h_354,al_c,q_85,usm_0.66_1.00_0.01/78b7db_0f23525201f148559289354f2fbc8121~mv2.jpg",
            Author: "H.G. Wells",
            publication: "William Heinemann",
            Type: "Science Fiction",
            Published_Year: 1895,
            Edition: "First",
            Price: 1200,
            Location: "London",
            About_Book: "The Time Machine is a science fiction novel by H.G. Wells, published in 1895. It tells the story of an English inventor and scientist who builds a machine that can transport him through time. He travels to the distant future where he discovers a world populated by two separate races, the peaceful Eloi and the savage Morlocks. The novel has been praised for its imaginative storytelling and exploration of social and scientific themes, including evolution and the consequences of industrialization."
          }
          
      
      

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
        whiteSpace: 'nowrap', // Prevents text from wrapping
        overflow: 'hidden', // Hides overflowing text
        textOverflow: 'ellipsis' // Replaces overflow text with an ellipsis
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
