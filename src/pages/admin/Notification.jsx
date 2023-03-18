import React, {useState} from 'react'
import '../../styles/notification.scss'

const Notification = () => {

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your functionality to send the notification to the selected users
        console.log(`Notification sent with title: ${title} and message: ${message}`);
    }

  return (
    <div className='notifications'>
      <form className='notification-form' onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" value={title} onChange={handleTitleChange} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={message} onChange={handleMessageChange}></textarea>

      <input type="submit" value="Send Notification" />
    </form>
    </div>
  )
}

export default Notification
