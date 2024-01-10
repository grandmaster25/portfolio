import React, { useRef } from 'react'
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';

import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
      console.log("Button Pressed ");
      e.preventDefault();

      emailjs.sendForm('service_em18m1q', 'template_7y2vq5v', form.current, 'nw4d2rjGUM8F6KwKz')
        .then((result) => {
            console.log(result.text);
            alert('Email Sent !');
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section id="contactPage">
        <div id="clients">
            <h2 className="contactPageTitle">My Clients</h2>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes 
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="Walmart" className="clientImg" />
                <img src={Adobe} alt="Adobe" className="clientImg" />
                <img src={Microsoft} alt="Microsoft" className="clientImg" />
                <img src={Facebook} alt="Facebook" className="clientImg" />
            </div>
        </div>
        <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                   <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                   <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                   <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                   <button type='submit' value='Send' className="submitBtn">Submit</button>
                   <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="Twitter" className="link" />
                    <img src={YoutubeIcon} alt="Youtube" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                   </div>
                </form>
        </div>
    </section>
  )
}

export default Contact;