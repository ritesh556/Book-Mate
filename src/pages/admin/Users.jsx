import React from 'react'
import User from '../../assets/user.jpg'
import Sidebar from '../../components/Sidebar'



import '../../styles/users.scss'

export const Users = () => {
  return ( <>
    <div className='dashboard'>
        <div>
      <Sidebar/> </div>
    <div className='all-users'>
        <table>
            <thead>
                <tr>
                <th>User Image</th>
                <th>Name</th>
                <th>Address</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td><img src={User} alt="User" /></td>
                    <td>John Smith</td>
                    <td>123 Main St, Anytown USA</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>

                <tr>
                    <td><img src={User} alt="User" /></td>
                    <td>Jane Doe</td>
                    <td>456 Oak Ave, Somewhere</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>

                <tr>
                    <td><img src={User} alt="User" /></td>
                    <td>Bob Johnson</td>
                    <td>789 Elm St, Nowhere</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>

                <tr>
                    <td><img src={User} alt="User" /></td>
                    <td>Mary Brown</td>
                    <td>321 Maple Rd, Anywhere</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>
                
                <tr>
                    <td><img src={User} alt="User" /></td>
                    <td>Mary Brown</td>
                    <td>321 Maple Rd, Anywhere</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>
                
                <tr>
                    <td><img src={User} alt="User" /></td>
                    <td>Mary Brown</td>
                    <td>321 Maple Rd, Anywhere</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>
                
                <tr>
                    <td><img src={User} alt="User" /></td>
                    <td>Mary Brown</td>
                    <td>321 Maple Rd, Anywhere</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>
                
                <tr>
                    <td><img src={User} alt="User" /></td>
                    <td>Mary Brown</td>
                    <td>321 Maple Rd, Anywhere</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>
                
                <tr>
                    <td><img src={User} alt="User" /></td>
                    <td>Mary Brown</td>
                    <td>321 Maple Rd, Anywhere</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>
                
            </tbody>
        </table>

    </div>
   </div>
   </>
  )
}
