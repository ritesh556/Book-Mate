import React from 'react';


import '../../styles/userdashboard.scss';
import Usersidebar from './Userslidebar';

const Userdashboard = () => {
  return (
    <div className='dashboard'>
    <Usersidebar/>
    <div className="dashboard-container">
      

      <div className="order-tracking">
        <h2>Order Tracking</h2>
        <ul>
          <li>Order #12345 - Shipped</li>
          <li>Order #67890 - Delivered</li>
        </ul>
      </div>

      <div className="wishlist">
        <h2>Wishlist</h2>
        <ul>
          <li>Book #1</li>
          <li>Book #2</li>
          <li>Book #3</li>
        </ul>
      </div>

      <div className="reviews-ratings">
        <h2>Reviews and Ratings</h2>
        <ul>
          <li>Book #1 - 4 Stars - "Great book!"</li>
          <li>Book #2 - 3 Stars - "Okay book, could be better"</li>
          <li>Book #3 - 5 Stars - "Absolutely loved it!"</li>
        </ul>
      </div>

      <div className="customer-support">
        <h2>Customer Support</h2>
        <p>If you have any issues or questions, please contact us at support@bookstore.com or call us at 1-800-BOOKSTORE.</p>
      </div>

      <div className="loyalty-program">
        <h2>My books</h2>
       <ul>
        <li>Harry potter</li>
        <li>one piece</li>
       </ul>
      </div>

      <div className="book-recommendations">
        <h2>Book Recommendations</h2>
        <ul>
          <li>Book #4 - Recommended for you based on your purchase history</li>
          <li>Book #5 - Recommended for you based on your wishlist</li>
          <li>Book #6 - Recommended for you based on your browsing history</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Userdashboard;
