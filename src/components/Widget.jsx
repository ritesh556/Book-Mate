import React from 'react'
import '../styles/widget.scss'

const Widget = ({type}) => {

  let data;

  //temporary 
  const amount = 100;
  const diff = 20;
  

    switch(type){
      case "user":
        data={
          title:"USERS",
          link:"See all users",
          icon: 'icon goes here' ,
        };
        break;

        case "order":
          data={
            title:"BOOKS",
            link:"View all books",
            icon: 'icon goes here' ,
          };
          break;

          case "request":
            data={
              title:"REQUESTS",
              link:"View all book requests",
              icon: 'icon goes here' ,
            };
            break;

        default:
          break;
    }

  return (
    <div className='widget'>
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{amount}</span>
          <span className="link">{data.link}</span>
          
        </div>
        <div className="right">
          <div className="percentage positive">{diff}%</div>
        </div>
    </div>
  )
}

export default Widget
