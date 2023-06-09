import React, {useState} from 'react'
import '../../styles/notification.scss'
import Sidebar from '../../components/Sidebar'

const Notification = () => {

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

   
    
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your functionality to send the notification to the selected users
        console.log(`Notification sent with title: ${title} and message: ${message}`);
    }

  return (
    <>
      <div className='dashboard'>
    <div>
    <Sidebar/>
   
    </div>
    <div className='notifications'>
      <form className='notification-form' onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

      <input type="submit" value="Send Notification" />
    </form>
    </div>
    </div>
    
    </>
  )
}

export default Notification
