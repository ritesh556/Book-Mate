import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/home.scss'
import User from '../assets/user.jpg'
import Starrating from '../components/fontawesome icons/Starrating'

import Woman from '../assets/woman.jpg'

const Home = () => {
    const navigate = useNavigate()
  return (
    <>
        <div className='home'>
            <div className="main-content">
               <p style={{marginBottom:'1rem', fontSize:'2.5rem'}}>Join our community today and discover a world of endless literary possibilities waiting to be explored!</p>
               <button onClick={()=>navigate("/login")}>Get Started</button>
            </div>
        </div>

        <div className="container">

            {/* Introduction Part */}

            <section className='intro'>
                <p><span>Welcome to BookMate, </span>the perfect online platform for book lovers. With BookMate, you can easily share your favorite books with others and discover new titles to add to your reading list. Our user-friendly interface makes it simple to browse and search for books uploaded by other users, and you can easily request to borrow books that catch your interest. Whether you're an avid reader or simply looking for your next great read, BookMate is the perfect place to connect with fellow book lovers and discover new literary gems. Start exploring our extensive library of books today and join our community of readers!</p>
                <img src={Woman} alt="Woman reading book" />
            </section>


            {/* Quote Section */}
            <section className='quotes'>
                <blockquote>
                    "A reader lives a thousand lives before he dies. The man who never reads lives only one."
                    <cite>- George R.R. Martin</cite>
                </blockquote>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="cards">
                    <div className="card">
                        <img src={User} alt="User" />
                        <p className="profession">Bar Dancer</p>
                        <p> <Starrating rating={2.5}/> </p>
                        <p className="review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea eius quisquam error harum cupiditate, ipsum voluptate et repudiandae culpa!</p>
                    </div>
                    
                    <div className="card">
                        <img src={User} alt="User" />
                        <p className="profession">Bar Dancer</p>
                        <p> <Starrating rating={2.5}/> </p>
                        <p className="review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea eius quisquam error harum cupiditate, ipsum voluptate et repudiandae culpa!</p>
                    </div>
                    
                    <div className="card">
                        <img src={User} alt="User" />
                        <p className="profession">Bar Dancer</p>
                        <p> <Starrating rating={2.5}/> </p>
                        <p className="review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea eius quisquam error harum cupiditate, ipsum voluptate et repudiandae culpa!</p>
                    </div>
                    
                    <div className="card">
                        <img src={User} alt="User" />
                        <p className="profession">Bar Dancer</p>
                        <p> <Starrating rating={2.5}/> </p>
                        <p className="review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea eius quisquam error harum cupiditate, ipsum voluptate et repudiandae culpa!</p>
                    </div>
                </div>
            </section>
        </div>

    </>
  )
}

export default Home
