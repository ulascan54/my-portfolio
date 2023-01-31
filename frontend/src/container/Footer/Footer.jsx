import React, { useState } from 'react';
import {AiOutlineCloudDownload} from 'react-icons/ai'
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' })
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:ulascandemirbag@gmail.com" className="p-text">ulascandemirbag@gmail.com</a>
        </div>
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:ulascan.demirbag@std.yeditepe.edu.tr" className="p-text">ulascan.demirbag@std.yeditepe.edu.tr</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:0530 897 54 86" className="p-text">+90 530 897 54 86</a>
        </div>

      </div>
      {!isFormSubmitted ? (
          <form onSubmit={handleSubmit} className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" required name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" required name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              required
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__buttons'>
          <button  className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button>
          <button  className="p-text" onClick={resetForm}>Reset</button>
          </div>
          </form>
          
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
              <div className="app__footer-card app__footer-card-qr">

          <a href="https://docs.google.com/document/d/1r62aYrw97PJeEkf4dEX8EDMdIOUXC8rn3wVODRUbltc" target="_blank">
            <AiOutlineCloudDownload size={22}/><span> Download My Resume</span></a>
        </div>
        <div className="app__footer-card app__footer-card-qr">
          <div>
          <img src={images.qr} alt="qr-code" />
          <p>SCAN ME !</p>
          </div>
        </div>
        <div className="copyright">
          <p className="p-text">@2023 ULAS CAN</p>
          <p className="p-text">All rights reserved</p>
        </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);