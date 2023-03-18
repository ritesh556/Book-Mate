import React from 'react'
import User from '../../assets/book.jpg'

import '../../styles/dashboard.scss'
import '../../styles/users.scss'
import Sidebar from '../../components/Sidebar'

const Books = () => {
  return (
    
    <div className='dashboard'>
        <div>
            <Sidebar/>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th>Book Image</th>
                    <th>Book Name</th>
                    <th>Uploaded By</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td><img src={User} alt="Book" /></td>
                    <td>The Great Gatsby</td>
                    <td>John Smith</td>
                    <td>123 Main St, Anytown USA</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>

                <tr>
                    <td><img src={User} alt="Book"/></td>
                    <td>To Kill a Mockingbird</td>
                    <td>Jane Doe</td>
                    <td>456 Oak Ave, Somewhere</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>

                <tr>
                    <td><img src={User} alt="Book"/></td>
                    <td>1984</td>
                    <td>Bob Johnson</td>
                    <td>789 Elm St, Nowhere</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>

                <tr>
                    <td><img src={User} alt="Book"/></td>
                    <td>Pride and Prejudice</td>
                    <td>Mary Brown</td>
                    <td>321 Maple Rd, Anywhere</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>

            </tbody>
        </table>

    </div>
    
  )
}

export default Books
