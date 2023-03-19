import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt  } from 'react-icons/fa';
import { AiFillFacebook  } from 'react-icons/ai';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <div className="contact-info__item">
        
          <FaEnvelope />
          <a href="mailto:riteshnepal6@gmail.com" className="email"><span style={{marginLeft:"5px"}}> riteshnepal6@gmail.com </span></a>
        </div>
        <div className="contact-info__item">
          <FaPhone />
          <span style={{marginLeft:"5px"}}>+977-9813833723</span>
        </div>
        <div className="contact-info__item">
          <FaMapMarkerAlt />
          <span style={{marginLeft:"5px"}} >Biratnagar,Morang</span>
        </div>
        <div className="contact-info__item">
        <a href="https://www.facebook.com/ritesh.nepal.5">  <AiFillFacebook/>  </a>
           
        </div>
      </div>
      <div className="copywrite">
        <p>&copy; 2023 Books Mate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
