import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './Contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
function Contact(){

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_k1a7pai', 'template_l5uxyuo', form.current, {
            publicKey: 'LfP5Vyi1gyilt3_G7',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };

    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <HiOutlineMail className="contact_icon"/>
                        <h4>
                            Email
                        </h4>
                        <small>
                            chetanchannappagol@gmail.com
                        </small>
                        <a href="mailto:chetanchannappagol.1js15is020@gmail.com">Send Email</a>
                    </article>
                    <article className="contact_option">
                        <FaWhatsapp className="contact_icon"/>
                        <h4>
                            WhatsApp
                        </h4>
                        <small>
                            98765467988
                        </small>
                        <a href="https://api.whatsapp.com/send?phone=+919945667872">Send Message</a>
                    </article>
                    {/* <article className="contact_option">
                        <AiOutlineLinkedin className="contact_icon"/>
                        <h4>
                            LinkedLn
                        </h4>
                        <small>
                            some
                        </small>
                        <a href="https://api.whatsapp.com/send?phone=+919945667872">Send Message</a>
                    </article> */}
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" id="name" placeholder="Full Name" required/>
                    <input type="text" name="email" id="email" placeholder="Your Email" required/>
                    <textarea name="message" id="" rows="7" placeholder="Your Message"></textarea>
                    <button className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;